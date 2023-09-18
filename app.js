import  express  from "express";
import dotenv from "dotenv";
//import AuthRouter from "./routes/auth.js"
import ClientRouter from "./routes/client.js"
import AdminRouter from "./routes/admin.js"
import SuperadminRouter from "./routes/superadmin.js"
import ProductRouter from "./routes/product.js"
import InventoryRouter from "./routes/inventory.js"
import ReserveRouter from "./routes/reserve.js"
import LoanRouter from "./routes/loan.js"

dotenv.config()

const app = express();
app.use(express.json());

//app.use("/auth", AuthRouter)
app.use("/clients", ClientRouter)
app.use("/admin", AdminRouter)
app.use("/superadmin", SuperadminRouter)
app.use("/products", ProductRouter)
app.use("/inventory", InventoryRouter)
app.use("/reservation", ReserveRouter)
app.use("/loan", LoanRouter)

const config = JSON.parse(process.env.MY_SERVER)

app.listen(config, ()=>{
    console.log(`Server is running on http://${config.host}:${config.port}`)
})


