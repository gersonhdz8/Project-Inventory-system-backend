import {Router} from "express";
import SuperadminController from "../controllers/superadmin.js"

const router = Router()

router.get("/getAdmin/:dni",SuperadminController.getSuperadmin)
router.get("/getAllAdmin",SuperadminController.getAllSuperadmin)
router.put("/update/:dni", SuperadminController.updateSuperadmin)
router.delete("/delete/:dni", SuperadminController.deleteSuperadmin)

export default router