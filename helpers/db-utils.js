import { MongoClient } from 'mongodb';

// eslint-disable-next-line import/no-unused-modules
export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://rbeyza:08082008@cluster0.ecah26w.mongodb.net/',
  );

  return client;
}

// eslint-disable-next-line import/no-unused-modules
export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

// eslint-disable-next-line import/no-unused-modules
export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
