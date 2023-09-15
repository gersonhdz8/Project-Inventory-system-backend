import {Router} from "express";
import ClientController from "../controllers/client.js"

const router = Router()

router.get("/", ClientController)

export default router

