import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let prodClientPromise: Promise<MongoClient> | undefined;

export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return Promise.reject(new Error('MONGODB_URI is not set'));
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect();
    }
    return global._mongoClientPromise;
  }

  if (!prodClientPromise) {
    prodClientPromise = new MongoClient(uri).connect();
  }
  return prodClientPromise;
}

const clientPromise: PromiseLike<MongoClient> = {
  then(onFulfilled, onRejected) {
    return getMongoClient().then(onFulfilled, onRejected);
  },
};

export default clientPromise;
