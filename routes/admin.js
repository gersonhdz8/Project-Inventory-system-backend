import {Router} from "express";
import AdminController from "../controllers/admin.js"

const router = Router()

router.get("/getAdmin/:id",AdminController.getAdmin)
router.get("/getAllAdmin",AdminController.getAllAdmin)
router.put("/update/:id", AdminController.updateAdmin)
router.delete("/delete/:id", AdminController.deleteAdmin)

export default router

