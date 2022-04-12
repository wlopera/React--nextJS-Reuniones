import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    title: "Mi primera reunión",
    address: "Cualquier dirección 10 5463 ...",
    description: "Descripción de mi primera reunión...",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    title: "Mi segunda reunión",
    address: "Cualquier dirección 5 1234 ...",
    description: "Descripción de mi segunda reunión...",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
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
