import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = import.meta.env.VITE_MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  if (!client.connect()) {
    await client.connect();
  }
  return client.db("forever-wed");
}

export async function createRSVP(rsvpData) {
  const db = await connectToDatabase();
  const result = await db.collection("rsvps").insertOne({
    ...rsvpData,
    created_at: new Date()
  });
  return result;
}

export async function getRSVPs(invitationId) {
  const db = await connectToDatabase();
  return await db.collection("rsvps")
    .find({ invitation_id: invitationId })
    .sort({ created_at: -1 })
    .toArray();
}