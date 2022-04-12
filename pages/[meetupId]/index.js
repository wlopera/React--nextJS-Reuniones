import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      title="Una Primera reunión"
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      address="Vista Hermosa. 34 5674. Ciudad de Panamá. Panamá"
      description="Descripción de mi porimera reunión..."
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log("Consultar data del id:", meetupId);
  // Consultar API o BD con fetch simple
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "Una Primera reunión",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "Vista Hermosa. 34 5674. Ciudad de Panamá. Panamá",
        description: "Descripción de mi porimera reunión...",
      },
    },
  };
};

export default MeetupDetails;
