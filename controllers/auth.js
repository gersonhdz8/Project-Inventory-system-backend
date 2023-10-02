import Model from "../models/modelMongoDB.js"
import bcrypt from "bcrypt"

export default class AuthController{

    static async userRegister(req, res, next){

        try {
            req.body.password = await bcrypt.hash(req.body.password,10) 
            //console.log(req.body.password)           
            const user= await Model.userRegister(req.body)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }

    }
    static async userLogin(req, res, next){
        
        try {
            const {username,password} = req.body
            const user= await Model.userLogin(username,password)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
    
}