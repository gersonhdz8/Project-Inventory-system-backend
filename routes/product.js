import {Router} from "express";
import ProductController from "../controllers/client.js"

const router = Router()

router.get("/getProduct/:id",ProductController.getProduct)
router.get("/getAllProducts",ProductController.getAllProducts)
router.put("/update/:id", ProductController.updateProduct)
router.delete("/delete/:id", ProductController.deleteProduct)

export default router