//our-domain/new-meetup
import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const AddMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
};

export default NewMeetupPage;
