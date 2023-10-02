import Model from "../models/modelMongoDB.js"

export default class InventoryController {

    static async getInventoryBySerial(req,res,next){
        try {
            const inventory = await Model.getInventoryBySerial(req.params.serial)            
            res.status(200).json(inventory)
        } catch (error) {
            next(error); 
        }
    }

    static async getAllInventories(req,res,next){
        try {
            const inventory = await Model.getAllInventories()            
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }
    static async getInventoryByCategory(req,res,next){
        try {
            const inventory = await Model.getInventoryByCategory(req.params.category)            
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
            const inventory = await Model.deleteInventory(req.params.serial)                       
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }
    static async updateInventory(req,res,next){

        try {
            const inventory = await Model.updateInventory(req.params.serial,req.body)            
            res.status(200).json(inventory);
        } catch (error) {
            next(error); 
        }
    }

}