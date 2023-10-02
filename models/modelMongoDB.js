import connect from "../config/mongoDB.js";
import dotenv from "dotenv"
import { ObjectId } from "mongodb";
import insertWithTransaction from "../helpers/transaction.js";
import { createToken, validateToken } from "../middlewares/jwt.js";
import bcrypt from "bcrypt";

dotenv.config("../")

const conexion = (await connect()).db(process.env.ATLAS_DB)
const usersCollection = conexion.collection("users")
const inventoryCollection = conexion.collection("inventory")
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
    //Buscar todos los prestamos
    static async getAllLoans(){
        try {

            const loan = await loansCollection.find().toArray()
            if(!loan)
            {
                return {status:400, message:"No se encontró ningún préstamo."}
            }
            else{
                return loan
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
            if(reserve.acknowledged && reserve.matchedCount>0)
                {
                    //console.log("Datos actualizados correctamente");
                    return {status:400, message:"Reserva cancelada correctamente."}
                }
                else{
                    return {status:400, message:"No fue posible cancelar la reserva."} 
                }            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Cambiar el estado de una reserva (Aceptada,Rechazada,Completada)Aceptar una reserva
    static async statusReserve(reserveId,status){
        try {

            const reserve= await reservationsCollection.updateOne({id:reserveId},{$set:{status: status}})
            if(reserve.acknowledged && reserve.matchedCount>0)
                {
                    //console.log("Datos actualizados correctamente");
                    return {status:400, message:"Estado de reserva actualizado correctamente."}
                }
                else{
                    return {status:400, message:"No fue posible actualizar el estado de la reserva."} 
                }             
            

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
                    return {status:400, message:"Datos actualizados correctamente."}
                }
                else{
                    return {status:400, message:"No fue posible actualizar datos."} 
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
                return  {status:400, message: "Producto eliminado Correctamente."} 
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

    //Crear préstamo
    static async createLoan(loan){
        try {

            return await insertWithTransaction(loan, "loans")

        } catch (error) {
            return Promise.reject(error)
        }
    }
    //Cambiar el estado de un prestamo (En préstamo,Devuelto,Retraso en devolución)
    static async statusLoan(loanId,status){
        try {

            const loan= await loansCollection.updateOne({id:loanId},{$set:{status: status}})
            if(loan.acknowledged && loan.matchedCount>0)
                {
                    //console.log("Datos actualizados correctamente");
                    return {status:400, message:"Estado de préstamo actualizado correctamente."}
                }
                else{
                    return {status:400, message:"No fue posible cambiar el estado del préstamo."} 
                }            

        } catch (error) {
            return Promise.reject(error)
        }
    } 

    //Cambiar el rol de usuario
    static async updateUserRole(userId,role){
        try {

            const usuario= await usersCollection.updateOne({id:userId},{$set:{role: role}})
            if(usuario.acknowledged && usuario.matchedCount>0)
                {
                    //console.log("Datos actualizados correctamente");
                    return {status:400, message:"Rol de usuario cambiado correctamente."}
                }
                else{
                    return {status:400, message:"No fue posible cambiar el rol de usuario."} 
                }            

        } catch (error) {
            return Promise.reject(error)
        }
    } 

    //Registrar usuario
    static async userRegister(user){
        try {

            return await insertWithTransaction(user, "users")

        } catch (error) {
            return Promise.reject(error)
        }
    }

    //Login usuario
    static async userLogin(username,password){
        try {

            const user = await usersCollection.findOne({username: username})
            const passwordCorrect= user === null ? false : await bcrypt.compare(password, user.password)
            if(!passwordCorrect)
            {
                return {status:400, message: "Usuario o contraseña incorrecta."} 
            }
            const token = await createToken(user, process.env.SECRET_KEY)            
            return {status:200, infoUser:user, token:token , message:"Login sucess"}
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async getInventoryBySerial(serial){
        try {

            const inventory = await inventoryCollection.find({serialGroup:serial}).toArray()
            if(!inventory)
            {
                return {status:400, message:"No se encontró ningún inventario con este serial."}
            }
            else{
                return inventory
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async getAllInventories(req,res,next){
        try {

            const inventory = await inventoryCollection.find().toArray()
            if(!inventory)
            {
                return {status:400, message:"No se encontró ningún inventario."}
            }
            else{
                return inventory
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async getInventoryByCategory(category){
        try {

            const inventory = await inventoryCollection.find({category:category}).toArray()
            if(!inventory)
            {
                return {status:400, message:"No se encontró ningún inventario con esta categoria."}
            }
            else{
                return inventory
            }
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async createInventory(inventory){

        try {

            return await insertWithTransaction(inventory, "inventory")

        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async deleteInventory(serial){

        try {

            const inventory= await inventoryCollection.deleteOne({serialGroup:serial});
            if(inventory.acknowledged && inventory.deletedCount>0)
            {
                return  {status:400, message: "Inventario eliminado Correctamente"} 
            }
            return inventory
            

        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async updateInventory(serial, dataInventory){

        try {

            const inventory = await inventoryCollection.updateOne({serialGroup:serial},{$set:dataInventory});
                if(inventory.acknowledged && inventory.matchedCount>0)
                {
                    console.log("Datos actualizados correctamente");
                    return {status:400, message:"Datos actualizados correctamente." }
                }
                else{
                    return {status:400, message:"No fue posible actualizar datos." } 
                }            

        } catch (error) {
            return Promise.reject(error)
        }
    }
}