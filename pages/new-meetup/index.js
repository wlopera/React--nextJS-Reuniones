//our-domain/new-meetup
import React, { Fragment } from "react";
import Head from "next/head";

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

  return (
    <Fragment>
      <Head>
        <title>Agregar uneva reunión</title>
        <meta
          name="description"
          content="Agregue sus propias reuniones y cree oportunidades increíbles para establecer contactos"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
