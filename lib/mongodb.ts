import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

const uri = process.env.MONGODB_URI;

if (process.env.NODE_ENV === 'development') {
  // In development, reuse the client across hot-reloads
  if (!global._mongoClientPromise) {
    if (!uri) {
      global._mongoClientPromise = Promise.reject(new Error('MONGODB_URI is not set'));
    } else {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
  }
  clientPromise = global._mongoClientPromise;
} else {
  if (!uri) {
    clientPromise = Promise.reject(new Error('MONGODB_URI is not set'));
  } else {
    clientPromise = new MongoClient(uri).connect();
  }
}

export default clientPromise;
