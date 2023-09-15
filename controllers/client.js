import ClientModel from "../models/client.js"

export default class ClientController{
    static async getClients(){
        try{
            const users= await ClientModel.getClients();
            return users
        }
        catch(error)
        {
            res.send({message: error})
        }
    }
}