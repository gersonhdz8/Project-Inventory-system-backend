import Model from "../models/modelMongoDB.js"

export default class AdminController{

    static async getAdmin(req,res,next){
        try {
            const admin = await Model.getAdmin(parseInt(req.params.id))            
            res.status(200).json(admin);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllAdmin(req,res,next){
        try {
            const admin = await Model.getAllAdmin()            
            res.status(200).json(admin);
        } catch (error) {
            next(error); 
        }
    }   
    static async deleteAdmin(req,res,next){

        try {
            const admin = await Model.deleteAdmin(parseInt(req.params.id))                       
            res.status(200).json(admin);
        } catch (error) {
            next(error); 
        }
    }
    static async updateAdmin(req,res,next){

        try {
            const admin = await Model.updateAdmin(parseInt(req.params.id),req.body)            
            res.status(200).json(admin);
        } catch (error) {
            next(error); 
        }
    }    
}