import  express  from "express";
import dotenv from "dotenv";
//import AuthRouter from "./routes/auth.js"
import ClientRouter from "./routes/client.js"
import AdminRouter from "./routes/admin.js"
import SuperadminRouter from "./routes/superadmin.js"
import handleError from "./helpers/handleError.js";


dotenv.config()

const app = express();
app.use(express.json());

//app.use("/auth", AuthRouter)
app.use("/aplication/client", ClientRouter)
app.use("/aplication/admin", AdminRouter)
app.use("/aplication/superadmin", SuperadminRouter)

app.use(handleError);


const config = JSON.parse(process.env.MY_SERVER)

app.listen(config, ()=>{
    console.log(`Server is running on http://${config.host}:${config.port}`)
})


