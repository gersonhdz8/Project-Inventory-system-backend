import  express  from "express";
import dotenv from "dotenv";
import ClientRoutes from "./routes/client.js"

dotenv.config()

const app = express();
app.use(express.json());

app.use("/users", ClientRoutes)

const config = JSON.parse(process.env.MY_SERVER)

app.listen(config, ()=>{
    console.log(`Server is running on http://${config.host}:${config.port}`)
})


