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
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
