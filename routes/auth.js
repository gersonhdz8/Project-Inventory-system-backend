import {Router} from "express"
import AuthController from "../controllers/auth.js"

const router= Router()

router.post("/client/register", AuthController.registerClient)
router.post("/client/login", AuthController.loginClient)
router.post("/admin/register", AuthController.registerAdmin)
router.post("/admin/login", AuthController.loginAdmin)
router.post("/superadmin/register", AuthController.registerSuperadmin)
router.post("/superadmin/login", AuthController.loginSuperadmin)

export default router