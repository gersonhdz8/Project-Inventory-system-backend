import connect from "../config/mongoDB.js";
import dotenv from "dotenv"
import insertWithTransaction from "../helpers/transaction.js";

dotenv.config("../")

const conexion = (await connect()).db(process.env.ATLAS_DB)
const usersCollection = conexion.collection("users")
const productsCollection = conexion.collection("products")
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
    //Buscar todos los productos
    static async getAllProducts(){
        try {

            const product = await productsCollection.find().toArray()
            if(!product)
            {
                return {status:400, message:"No se encontró ningún producto"}
            }
            else{
                return product
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar producto por nombre
    static async getProductByName(name){
        try {

            const product = await productsCollection.find({name:name}).toArray()
            if(!product)
            {
                return {status:400, message:"No se encontró ningún producto"}
            }
            else{
                return product
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar producto por categoria
    static async getProductByCategory(category){
        try {

            const product = await productsCollection.find({category:category}).toArray()
            if(!product)
            {
                return {status:400, message:"No se encontró ningún producto"}
            }
            else{
                return product
            }
            
        } catch (error) {
            
            return Promise.reject(error)
        }
    }
    //Buscar inventario del producto por ProductId
    static async getProductInventoryById(productId){
        try {

            const product = await inventoryCollection.find({productId:productId}).toArray()
            if(!product)
            {
                return {status:400, message:"No se encontró ningún inventario."}
            }
            else{
                return product
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar inventario del producto por nombre de producto
    static async getProductInventoryByName(name){
        try {

            const product = await productsCollection.aggregate([{$match:{name:name}},{$lookup:{from: "inventory",
            localField: "id" ,
            foreignField: "productId" ,
            as: "inventory"}}]).toArray()
            if(!product)
            {
                return {status:400, message:"No se encontró ningún inventario"}
            }
            else{
                return product
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar todas las reservas
    static async getAllReserves(){
        try {

            const reserve = await reservationsCollection.find().toArray()
            if(!reserve)
            {
                return {status:400, message:"No se encontró ningúna reserva"}
            }
            else{
                return reserve
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar productos disponibles para reserva
    static async getProductsAvailableReserve(){
        try {

            const product = await inventoryCollection.find({quantity:{ $gte: 1}}).toArray()
            if(!product)
            {
                return {status:400, message:"No se encontró ningúna reserva"}
            }
            else{
                return product
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Buscar reserva por dni de usuario 
    static async getReserveByDni(dni){
        try {

            const product = await reservationsCollection.find({dni:dni}).toArray()
            if(!product)
            {
                return {status:400, message:"No se encontró ningúna reserva"}
            }
            else{
                return product
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Crear una reserva
    static async createReserve(reserve){
        try {

            return await insertWithTransaction(reserve, "reservations")

        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Obtener detalles de las reservas del usuario
    static async getReserveDetails(dni){
        try {

            const reserve= await reservationsCollection.find({dni:dni}).toArray()
            return reserve

        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Cancelar una reserva
    static async canceledReserve(reserveId){
        try {

            const reserve= await reservationsCollection.updateOne({id:reserveId},{$set:{status: "Cancelada"}})
            return reserve

        } catch (error) {
            return Promise.reject(error)
        }
    }

    //Crear producto
    static async createProduct(product){
        try {

            return await insertWithTransaction(product, "products")

        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Actualizar producto
    static async updateProduct(productId, dataProduct){
        try {

            const product = await productsCollection.updateOne({id:productId},{$set:dataProduct});
                if(product.acknowledged && product.matchedCount>0)
                {
                    console.log("Datos actualizados correctamente");
                    return {status:400, message:"Datos actualizados correctamente." }
                }
                else{
                    return {status:400, message:"No fue posible actualizar datos." } 
                }
            //return product

        } catch (error) {
            return Promise.reject(error)
        }
    }

    //Eliminar producto
    static async deleteProduct(productId){
        try {

            const product= await productsCollection.deleteOne({id:productId});
            if(product.acknowledged && product.deletedCount>0)
            {
                //console.log("Producto eliminado correctamente");
                return  {status:400, message: "Producto eliminado Correctamente"} 
            }
            return product
            

        } catch (error) {
            return Promise.reject(error)
        }
    }

    //Buscar todas las reservas
    static async getAllReserve(){
        try {

            const reserve= await reservationsCollection.find().toArray();
            if(!reserve)
            {
                return  {status:400, message: "No hay reservas"} 
            }
            return reserve
            

        } catch (error) {
            return Promise.reject(error)
        }
    }

}