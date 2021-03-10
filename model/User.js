import mongoose from 'mongoose';
var Schema = mongoose.Schema
const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required: true , 
    },
    email: {
        type: String ,
    },
     password: String ,
     phoneNumber:String,
     achats:[{
        type: Schema.Types.ObjectId,
        ref: "Product"
     }]
}
);
const User = (mongoose.model('user', userSchema))
export default User 