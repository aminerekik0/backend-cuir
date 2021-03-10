import data from "../data.js";

export const getAllProducts = async (req, res) => {
  console.log(data);
  try {
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getCartItems = async (req , res) =>{
    const { productIDs } = req.body;
    console.log('productIDs', productIDs)
    let cartItems = [];
    for (let i = 0; i < productIDs.length; i++) {
      const x = data.products.find(el => el._id === productIDs[i]);
      cartItems = [...cartItems, x];
    }
    console.log('cartItems', cartItems)
    try {
      return res.json(cartItems);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
}
