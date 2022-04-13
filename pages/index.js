import React, { Fragment } from "react";
import Head from "next/head";

import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React-NextJS -> Reuniones</title>
        <meta
          name="description"
          content="Explore una enorme lista de reuniones de React altamente activas"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

/**
 * Funcion estatica que permite cargar data antes de iniciar el renderizado
 *         permite realizar cualquier proceso servidor, consultar API o BD
 *         este proceso se ejecuta del lado del servidor, no del cliente
 *         retorna siempre un objeto al cliente y debe retornarlo a traves
 *         del objeto props del componente.
 *            -- ejecucion en tiempo de compilacion --
 */
// export async function getStaticProps() {}
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://wlopera:q5RUFrSLjphXk6q1@cluster0.z3d0z.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  console.log("Consulta Mongodb:", meetups);

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    //revalidate: 2, //opcional - para llamar al servicio nuevamente un tiempo n (ej: 2 seg)
  };
};

/**
 * Funcion dinamica que permite cargar data antes de iniciar el renderizado
 *         permite realizar cualquier proceso servidor, consultar API o BD
 *         este proceso se ejecuta del lado del servidor, no del cliente
 *         retorna siempre un objeto al cliente y debe retornarlo a traves
 *         del objeto props del componente.
 *            -- ejecucion para cada solicitud entrante --
 *  context:  Parametro a enviar al servicio - opcional
 */
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   console.log("Request:", req);
//   console.log("Response:", res);

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
