import {Router} from "express";
import ClientController from "../controllers/client.js"

const router = Router()

router.get("/getClient/:dni",ClientController.getClient)
router.get("/getAllClients",ClientController.getAllClients)
router.put("/update/:dni", ClientController.updateClient)
router.delete("/delete/:dni", ClientController.deleteClient)

export default router

