import {Router} from "express";
import SuperadminController from "../controllers/superadmin.js"
import AdminController from "../controllers/admin.js"

const router = Router()


router.patch("/rolUser/:userId/:role",SuperadminController.updateUserRole)
router.get("/getAllAdmin",AdminController.getAllAdmin)


router.get("/getAdmin/:dni",SuperadminController.getSuperadmin)
router.put("/update/:dni", SuperadminController.updateSuperadmin)
router.delete("/delete/:dni", SuperadminController.deleteSuperadmin)

export default router