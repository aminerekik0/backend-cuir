
import User from "../model/User.js"
import jwt from  "jsonwebtoken"
import config from "config"
import bcrypt from "bcrypt"

const secretOrKey = config.get('secretOrKey')
export const register = async (req,res) =>{
    const {name , email , password , phoneNumber} = req.body;
    try{
      const searchRes = await User.findOne({email})
      if (searchRes) return res.status(401).json({msg:`user already exists `})
      const newUser =new User({
          name ,
          email ,
          password ,
          phoneNumber,
      })
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      newUser.password = hash;
      await newUser.save() 
     
      const payload = {
        id: newUser._id ,
      }
      const token = await jwt.sign(payload,secretOrKey) 
      return res.status(200).json({token : `bearer ${token}` , newUser})
    } catch(error) {
      console.error(500).json({errors:error})

    }
}
export const login = (async(req,res) =>{
 const {email,password}= req.body 
  try {
    const user = await User.findOne({email})
    if (!user) return res.status(404).json({msg : "sorry , we couldn't find an account with that E-mail"})
    const isMatch = await bcrypt.compare(password , user.password)
    if (!isMatch) return res.status(401).json({msg : "sorry , that password isn't right "})
    const payload = {
      id: user._id , 
      name: user.name,
      email : user.email , 
      phoneNumber : user.phoneNumber
    }
    const token = await jwt.sign(payload,secretOrKey) 
    return res.status(200).json({token : `bearer ${token}`})
  } catch (error) {
    console.error(error);
    res.status(500).json({errors:error})
  }
} )