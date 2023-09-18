import Model from "../models/modelMongoDB.js"

export default class ProductController {

    static async getProduct(req,res,next){
        try {
            const product = await Model.getProduct(parseInt(req.params.id))            
            res.status(200).json(product);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllProduct(req,res,next){
        try {
            const product = await Model.getAllProduct()            
            res.status(200).json(product);
        } catch (error) {
            next(error); 
        }
    }
    static async createProduct(req,res,next){

        try {
            const product = await Model.createProduct(req.body)
            res.status(200).json(product);
        } catch (error) {
            next(error); 
        }
    }
    static async deleteProduct(req,res,next){

        try {
            const product = await Model.deleteProduct(parseInt(req.params.id))                       
            res.status(200).json(product);
        } catch (error) {
            next(error); 
        }
    }
    static async updateProduct(req,res,next){

        try {
            const product = await Model.updateProduct(parseInt(req.params.id),req.body)            
            res.status(200).json(product);
        } catch (error) {
            next(error); 
        }
    }

}