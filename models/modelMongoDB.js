import connect from "../config/mongoDB.js";
import dotenv from "dotenv"

dotenv.config("../")

const conexion = (await connect()).db(process.env.ATLAS_DB)
const usersCollection = conexion.collection("users")
const productsCollection = conexion.collection("products")
const inventoryCollection = conexion.collection("inventory")
const reservationsCollection = conexion.collection("reservations")
const loansCollection = conexion.collection("loans")

export default class Model{
    static async getAllClients(){
        try {

            const client = await usersCollection.find({role:"client"}).toArray()
            if(!client)
            {
                return {status:400, message:"No se encontró ningún cliente"}
            }
            else{
                return client
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}