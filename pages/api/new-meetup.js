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

    console.log("CRear registro Mongodb:", result);

    client.close();

    res
      .status(201)
      .json({ message: "Reunión insertada satisfactoriamente..." });
  }
};

export default handler;
