import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export default async function connect() {
    try {
        const uri = `${process.env.ATLAS_STRING}`;
        /* const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }; */
        const client = await new MongoClient(uri).connect();
        return client;
    } catch (error) {
        return {status: 500, message: error};
    }
}