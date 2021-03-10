import express from 'express'
import data from './data.js'
import connectDB from "./config/dbConnect.js"
import user from "./Routes/user.js"
import products from "./Routes/products.js"
const app = express();
app.use(express.json())




connectDB()
app.use('/user',user)
app.use('/products',products)
const port = process.env.PORT || 5000;




app.listen(port ,(err)=> 
  err? console.error(err) :   console.log(`The server is running on port ${port}`)
);