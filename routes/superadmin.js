import {Router} from "express";
import SuperadminController from "../controllers/superadmin.js"
import AdminController from "../controllers/admin.js"

const router = Router()


router.patch("/rolUser/:userId/:role",SuperadminController.updateUserRole)
router.get("/getAllUsers",AdminController.getAllUsers)
router.get("/getAllAdmin",AdminController.getAllAdmin)


export default router