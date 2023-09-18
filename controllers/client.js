import Model from "../models/modelMongoDB.js"

export default class ClientController{

    static async getClient(req,res,next){
        try {
            const client = await Model.getClient(parseInt(req.params.id))            
            res.status(200).json(client);
        } catch (error) {
            next(error); 
        }
    }

    static async getAllClients(req,res,next){
        try {
            const client = await Model.getAllClient()            
            res.status(200).json(client);
        } catch (error) {
            next(error); 
        }
    }   
    static async deleteClient(req,res,next){

        try {
            const client = await Model.deleteClient(parseInt(req.params.id))                       
            res.status(200).json(client);
        } catch (error) {
            next(error); 
        }
    }
    static async updateClient(req,res,next){

        try {
            const client = await Model.updateClient(parseInt(req.params.id),req.body)            
            res.status(200).json(client);
        } catch (error) {
            next(error); 
        }
    }
}