import {Router} from "express";
import InventoryController from "../controllers/inventory.js"
import ReserveController from "../controllers/reserve.js"

const router = Router()

router.get("/getAllInventories",InventoryController.getAllInventories)
router.get("/getInventoryCategory/:category",InventoryController.getInventoryByCategory)
router.get("/reserveDetails/:dni",ReserveController.getReserveDetails)
router.post("/newReserve",ReserveController.createReserve)
router.patch("/canceledReserve/:reserveId",ReserveController.canceledReserve)





export default router

