import {Router} from "express";
import AdminController from "../controllers/admin.js"
import ClientController from "../controllers/client.js"
import ProductController from "../controllers/product.js"
import LoanController from "../controllers/loan.js"
import ReserveController from "../controllers/reserve.js"

const router = Router()

router.post("/newProduct",ProductController.createProduct)
router.get("/getAllProducts",ProductController.getAllProducts)
router.patch("/updateProduct/:id",ProductController.updateProduct)
router.delete("/deleteProduct/:id",ProductController.deleteProduct)
router.get("/getAllReservations",ReserveController.getAllReserve)
router.patch("/statusReserve/:reserveId/:status",ReserveController.statusReserve)
router.post("/createLoan",LoanController.createLoan)
router.patch("/statusLoan/:loanId/:status",LoanController.statusLoan)
router.get("/getAllUserClients",ClientController.getAllUserClients)

export default router

