import {Router} from "express";
import LoanController from "../controllers/loan.js"

const router = Router()

router.get("/getClient/:dni",LoanController.getLoan)
router.get("/getAllClients",LoanController.getAllLoan)
router.post("/create",LoanController.createLoan)
router.put("/update/:dni", LoanController.updateLoan)
router.delete("/delete/:dni", LoanController.deleteLoan)

export default router