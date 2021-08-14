const mongoose=require("mongoose");

const UserRegisterationScheme=new mongoose.Schema({
    Username:{
        type:String,
    },
    Email:{ 
        type:String,
    },
    Phone:{
        type:Number,
    },
    Subject:{
        type:String,
        max:100,
    },
    Image:{
        type:String,
    },
    Gender:{
        type:String,
    },
})
const UserRegisteration=new mongoose.model("UserRegisteration",UserRegisterationScheme);

module.exports=UserRegisteration;