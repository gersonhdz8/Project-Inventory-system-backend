import Model from "../models/modelMongoDB.js"

export default class InventoryController{

    static async getInventory(req,res,next){
        try {
            const inventory = await Model.getInventory(parseInt(req.params.id))            
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllInventory(req,res,next){
        try {
            const inventory = await Model.getAllInventory()            
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }
    static async createInventory(req,res,next){

        try {
            const inventory = await Model.createInventory(req.body)
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }
    static async deleteInventory(req,res,next){

        try {
            const inventory = await Model.deleteInventory(parseInt(req.params.id))                       
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }
    static async updateInventory(req,res,next){

        try {
            const inventory = await Model.updateInventory(parseInt(req.params.id),req.body)            
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }
}    
