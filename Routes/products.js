import express from "express" 
import { getAllProducts, getCartItems } from "../controllers/products.controller.js"


const Router = express.Router()

Router.get("/allproducts", getAllProducts)

Router.post("/cartItems", getCartItems)


export default Router