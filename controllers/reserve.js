import Model from "../models/modelMongoDB.js"

export default class ReserveController{

    static async getReserve(req,res,next){
        try {
            const reserve = await Model.getReserve(parseInt(req.params.id))            
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
    static async getReserveDetails(req,res,next){
        try {
            const reserve = await Model.getReserveDetails(req.params.dni)            
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
    static async canceledReserve(req,res,next){
        try {
            const reserve = await Model.canceledReserve(parseInt(req.params.reserveId))            
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
    static async statusReserve(req,res,next){
        try {
            const reserve = await Model.statusReserve(req.params.reserveId, req.params.status)            
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
    

    static async getAllReserve(req,res,next){
        try {
            const reserve = await Model.getAllReserve()            
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
    static async createReserve(req,res,next){

        try {
            const reserve = await Model.createReserve(req.body)
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
    static async deleteReserve(req,res,next){

        try {
            const reserve = await Model.deleteReserve(parseInt(req.params.id))                       
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
    static async updateReserve(req,res,next){

        try {
            const reserve = await Model.updateReserve(parseInt(req.params.id),req.body)            
            res.status(200).json(reserve);
        } catch (error) {
            next(error); 
        }
    }
}    
