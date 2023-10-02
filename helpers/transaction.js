// Importa el cliente MongoDB y otros módulos necesarios
import connect from "../config/mongoDB.js";

const conexion= await connect()

// Función para realizar una transacción de inserción
export default async function insertWithTransaction(data,collection) {
    try {

        const model={
            "users": "usersID",
            "products":"productsID",
            "inventory": "inventoryID",            
            "reservations":"reservationsID",
            "loans":"loansID"
        }        
        const collectionID= model[collection]                
        const session = conexion.startSession();

        try {
            session.startTransaction();

            const counterCollection = conexion.db().collection('counters');
            const doc = await counterCollection.findOneAndUpdate(
                { _id: collectionID },
                { $inc: { sequence_value: 1 } },
                { session, returnOriginal: false }
            );

            data.id = doc.sequence_value;   
            if(collection == "reservations")
            {
                data.status= "Pendiente"
            }
            if(collection == "users")
            {
                data.role= "client"
            }
            if(collection == "loans")
            {
                data.status= "En préstamo"
            }
            if(collection == "products")
            {
                data.status= "En inventario"
            }
            
            const modelCollection = conexion.db().collection(collection);
            const idObject= await modelCollection.insertOne(data,{ session });
            await session.commitTransaction();
            return{message:"Creación Exitosa",data}
        }
        catch (error)
        {
            //console.log(err);
            return Promise.reject(error); 
        } 

        finally {
            session.endSession();
        }

    } 
    catch (error)
    {
        //console.log(err);
        return Promise.reject(error);  
    }    
    }