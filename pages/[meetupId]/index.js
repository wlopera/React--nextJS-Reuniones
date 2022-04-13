import React, { Fragment } from "react";
import Head from "next/head";

import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://wlopera:q5RUFrSLjphXk6q1@cluster0.z3d0z.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  console.log("Consulta lista de ids - Mongodb:", meetups);

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log("Consultar data del id:", meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://wlopera:q5RUFrSLjphXk6q1@cluster0.z3d0z.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const seletedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  console.log("Consulta Mongodb por id:", meetupId, seletedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: seletedMeetup._id.toString(),
        title: seletedMeetup.title,
        image: seletedMeetup.image,
        address: seletedMeetup.address,
        description: seletedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
