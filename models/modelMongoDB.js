import connect from "../config/mongoDB.js";
import dotenv from "dotenv"
import insertWithTransaction from "../helpers/transaction.js";

dotenv.config("../")

const conexion = (await connect()).db(process.env.ATLAS_DB)
const usersCollection = conexion.collection("users")
const productsCollection = conexion.collection("products")
const inventoryCollection = conexion.collection("inventory")
const reservationsCollection = conexion.collection("reservations")
const loansCollection = conexion.collection("loans")

export default class Model{

    //Buscar todos los usuarios
    static async getAllUsers(){
        try {

            const client = await usersCollection.find().toArray()
            if(!client)
            {
                return {status:400, message:"No se encontró ningún usuario"}
            }
            else{
                return client
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar todos los usuarios que sean clientes
    static async getAllUserClients(){
        try {

            const client = await usersCollection.find({role:"client"}).toArray()
            if(!client)
            {
                return {status:400, message:"No se encontró ningún usuario"}
            }
            else{
                return client
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar todos los usuarios que sean admin
    static async getAllUserAdmin(){
        try {

            const client = await usersCollection.find({role:"admin"}).toArray()
            if(!client)
            {
                return {status:400, message:"No se encontró ningún usuario"}
            }
            else{
                return client
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar usuarios por correo
    static async getUserByEmail(correo){
        try {

            const client = await usersCollection.find({email:correo}).toArray()
            if(!client)
            {
                return {status:400, message:"No se encontró ningún usuario"}
            }
            else{
                return client
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar usuarios por dni
    static async getUserByDni(dni){
        try {

            const client = await usersCollection.find({dni:dni}).toArray()
            if(!client)
            {
                return {status:400, message:"No se encontró ningún usuario"}
            }
            else{
                return client
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
}