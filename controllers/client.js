import Model from "../models/modelMongoDB.js"

export default class ClientController{
    static async getClients(){
        try{
            const users= await Model.getClients();
            return users
        }
        catch(error)
        {
            res.send({message: error})
        }
    }
}