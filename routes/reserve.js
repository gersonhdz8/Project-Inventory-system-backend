import {Router} from "express";
import ReserveController from "../controllers/reserve.js"

const router = Router()

router.get("/getReserve/:dni",ReserveController.getReserve)
router.get("/getAllReserves",ReserveController.getAllReserve)
router.post("/create",ReserveController.createReserve)
router.put("/update/:dni", ReserveController.updateReserve)
router.delete("/delete/:dni", ReserveController.deleteReserve)

export default router