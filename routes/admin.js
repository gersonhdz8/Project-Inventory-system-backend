import {Router} from "express";
import AdminController from "../controllers/admin.js"
import ProductController from "../controllers/product.js"
import LoanController from "../controllers/loan.js"
import ReserveController from "../controllers/reserve.js"

const router = Router()

router.post("/newProduct",ProductController.createProduct)
router.get("/getAllProducts",ProductController.getAllProducts)
router.patch("/updateProduct/:id",ProductController.updateProduct)
router.delete("/deleteProduct/:id",ProductController.deleteProduct)

router.get("/getAllReservations",ReserveController.getAllReserve)

router.get("/getAdmin/:id",AdminController.getAdmin)
router.get("/getAllAdmin",AdminController.getAllAdmin)
router.put("/update/:id", AdminController.updateAdmin)
router.delete("/delete/:id", AdminController.deleteAdmin)



export default router

