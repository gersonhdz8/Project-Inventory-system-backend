import Model from "../models/modelMongoDB.js"

export default class ProductController {

    static async getProduct(req,res,next){
        try {
            const product = await Model.getProduct(parseInt(req.params.name))            
            res.status(200).json(product);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllProducts(req,res,next){
        try {
            const product = await Model.getAllProducts()            
            res.status(200).json(product);
        } catch (error) {
            next(error); 
        }
    }
    static async getProductByCategory(req,res,next){
        try {
            const product = await Model.getProductByCategory(req.params.category)            
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