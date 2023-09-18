import Model from "../models/modelMongoDB.js"

export default class SuperadminController{

    static async getSuperadmin(req,res,next){
        try {
            const superadmin = await Model.getSuperadmin(parseInt(req.params.id))            
            res.status(200).json(superadmin);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllSuperadmin(req,res,next){
        try {
            const superadmin = await Model.getAllSuperadmin()            
            res.status(200).json(superadmin);
        } catch (error) {
            next(error); 
        }
    }   
    static async deleteSuperadmin(req,res,next){

        try {
            const superadmin = await Model.deleteSuperadmin(parseInt(req.params.id))                       
            res.status(200).json(superadmin);
        } catch (error) {
            next(error); 
        }
    }
    static async updateSuperadmin(req,res,next){

        try {
            const superadmin = await Model.updateSuperadmin(parseInt(req.params.id),req.body)            
            res.status(200).json(superadmin);
        } catch (error) {
            next(error); 
        }
    }
}