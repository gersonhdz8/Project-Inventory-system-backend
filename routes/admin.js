import {Router} from "express";
import AdminController from "../controllers/admin.js"
import ClientController from "../controllers/client.js"
import ProductController from "../controllers/product.js"
import LoanController from "../controllers/loan.js"
import ReserveController from "../controllers/reserve.js"
import InventoryController from "../controllers/inventory.js"

const router = Router()

router.post("/newProduct",ProductController.createProduct)
router.get("/getAllProducts",ProductController.getAllProducts)
router.patch("/updateProduct/:id",ProductController.updateProduct)
router.delete("/deleteProduct/:id",ProductController.deleteProduct)

router.post("/newInventory",InventoryController.createInventory)
router.get("/getInventorySerial/:serial",InventoryController.getInventoryBySerial)
router.patch("/updateInventory/:serial",InventoryController.updateInventory)

router.get("/getAllReservations",ReserveController.getAllReserve)
router.patch("/statusReserve/:reserveId/:status",ReserveController.statusReserve)
router.post("/createLoan",LoanController.createLoan)
router.patch("/statusLoan/:loanId/:status",LoanController.statusLoan)
router.get("/getAllLoans",LoanController.getAllLoans)

router.get("/getAllUserClients",ClientController.getAllUserClients)

export default router

