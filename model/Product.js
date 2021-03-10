import mongoose from 'mongoose';
const productSchema = mongoose.Schema({
  name:
    String,

  price: 
    String,
    
  
 image:
   String,
    
  
});
const Product = mongoose.model("product", productSchema);
export default Product 