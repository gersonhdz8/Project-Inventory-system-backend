import {Router} from "express";
import ClientController from "../controllers/client.js"
import ProductController from "../controllers/product.js"
import ReserveController from "../controllers/reserve.js"

const router = Router()

router.get("/getAllProducts",ProductController.getAllProducts)
router.get("/getProductCategory/:category",ProductController.getProductByCategory)
router.post("/newReserve",ReserveController.createReserve)
router.get("/reserveDetails/:dni",ReserveController.getReserveDetails)
router.patch("/canceledReserve/:reserveId",ReserveController.canceledReserve)





export default router

