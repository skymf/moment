import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

let mongoServer: MongoMemoryServer;
let mongoClient: MongoClient;

export async function setupMongoDB() {
  const useInMemory = process.env.USE_IN_MEMORY_MONGO === "true";
  let mongoUri: string;

  if (useInMemory) {
    mongoServer = await MongoMemoryServer.create();
    mongoUri = mongoServer.getUri();
  } else {
    mongoUri =
      process.env.MONGODB_URI || "mongodb://localhost:27017/your_database_name";
  }

  mongoClient = new MongoClient(mongoUri);
  await mongoClient.connect();
  return mongoClient.db();
}

export async function closeMongoDB() {
  if (mongoClient) {
    await mongoClient.close();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
}
