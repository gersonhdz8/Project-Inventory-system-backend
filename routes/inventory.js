import {Router} from "express";
import InventoryController from "../controllers/client.js"

const router = Router()

router.get("/invetoryProduct/:id",InventoryController.getInventory)
router.get("/allInventory",InventoryController.getAllInventory)
router.put("/updateInventory/product/:id", InventoryController.updateInventory)
router.delete("/delete/inventoryProduct/:id", InventoryController.deleteInventory)

export default router