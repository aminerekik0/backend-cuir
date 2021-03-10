
import express from "express" 
import { login, register } from "../controllers/user.controller.js"
import {registerRoules,validator} from "../middleware/validator.js"
import isAuth from "../middleware/passport-setup.js"
const Router = express.Router()


Router.post(`/register` ,register)
Router.post('/login' , login )
Router.get('/current' , isAuth() , (req,res) => {
    // console.log('req.user', req.user)
    
    res.json(req.user)})
export default Router