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
