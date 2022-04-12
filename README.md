# React--nextJS-Reuniones
Uso de React-NextJS.  Pantalla de reuniones 

## Estrutura
![Captura4](https://user-images.githubusercontent.com/7141537/162843772-70104ed7-d731-4e13-930c-816055dac6db.PNG)

## Código
![Captura5](https://user-images.githubusercontent.com/7141537/162843768-1fb86cd5-5ff3-4fea-9083-421c598fb5e8.PNG)

## Reuniones
![Captura](https://user-images.githubusercontent.com/7141537/162843627-a9704f23-37a2-4f79-b3bc-94dc5e92a062.PNG)

## Agregar Reunión
![Captura1](https://user-images.githubusercontent.com/7141537/162843620-08622be9-cf7b-4074-87bb-8e1da21d5302.PNG)

## Detalles de la reunión
![Captura2](https://user-images.githubusercontent.com/7141537/162843624-f2edd8a1-debf-42e1-895e-9a14e84f7432.PNG)

## Uso funciones servidor para cargar data 

D:\WorkSpace\WS_REACT_STUDY\react-next-meetup\pages\index.js
```
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
```

## MongoDB Atlas - configurar Base de datos
![Captura1](https://user-images.githubusercontent.com/7141537/163068405-cad10510-e03b-49bf-aca9-c9343b2e31b6.PNG)
![Captura2](https://user-images.githubusercontent.com/7141537/163068406-363e4151-1aa3-46db-ab22-0ba13b9bcea0.PNG)
![Captura3](https://user-images.githubusercontent.com/7141537/163068407-2792cc38-4026-42db-a86f-225c678d9071.PNG)
![Captura4](https://user-images.githubusercontent.com/7141537/163068398-58a178fb-7273-423c-adeb-345683a32e9c.PNG)

## Crear api - del lado del servidor
D:\WorkSpace\WS_REACT_STUDY\react-next-meetup\pages\api\new-meetup.js
```
// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  // Uso de try-catch para control de errores

  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://wlopera:q5RUFrSLjphXk6q1@cluster0.z3d0z.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log("Resultado MOngodb:", result);

    client.close();

    res
      .status(201)
      .json({ message: "Reunión insertada satisfactoriamente..." });
  }
};

export default handler;

```

## MongoDB
D:\WorkSpace\WS_REACT_STUDY\react-next-meetup\pages\new-meetup\index.js
```
//our-domain/new-meetup
import React, { Fragment } from "react";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("Respuesta al cliente del servicio mongo:", data);

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;

```

## Cargar registro
![Captura6](https://user-images.githubusercontent.com/7141537/163068639-ca5faab7-d92d-493a-8c30-742b0cccb85e.PNG)

## MongoDB Atlas - salida
![Captura5](https://user-images.githubusercontent.com/7141537/163068403-d81e1bc2-3f85-4b17-b14c-dbcbfb221616.PNG)
