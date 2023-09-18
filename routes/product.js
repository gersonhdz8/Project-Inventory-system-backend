import {Router} from "express";
import ProductController from "../controllers/product.js"

const router = Router()

router.get("/getProduct/:id",ProductController.getProduct)
router.get("/getAllProducts",ProductController.getAllProduct)
router.post("/create",ProductController.createProduct)
router.put("/update/:id", ProductController.updateProduct)
router.delete("/delete/:id", ProductController.deleteProduct)

export default router