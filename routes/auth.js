import {Router} from "express"
import AuthController from "../controllers/auth.js"

const router= Router()

router.post("/users/register", AuthController.userRegister)
router.post("/users/login", AuthController.userLogin)

export default router 