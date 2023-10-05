import  express  from "express";
import dotenv from "dotenv";
import AuthRouter from "./routes/auth.js"
import ClientRouter from "./routes/client.js"
import AdminRouter from "./routes/admin.js"
import SuperadminRouter from "./routes/superadmin.js"
import handleError from "./helpers/handleError.js";
import passport from './config/passport.js';
import checkRole from './middlewares/checkRole.js';
import cors from "cors"


dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", AuthRouter)
app.use(passport.initialize())
app.use(passport.authenticate('bearer', { session: false }))
app.use("/aplication/client", checkRole, ClientRouter)
app.use("/aplication/admin",checkRole, AdminRouter)
app.use("/aplication/superadmin",checkRole, SuperadminRouter)

app.use(handleError);


const config = JSON.parse(process.env.MY_SERVER)

app.listen(config, ()=>{
    console.log(`Server is running on http://${config.host}:${config.port}`)
})


