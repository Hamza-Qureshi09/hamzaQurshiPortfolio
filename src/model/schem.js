const mongoose=require("mongoose");

const Hz_Portfolio_Schema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    subject:{
        type:String,
        required:true,
        max:30,
    },
    message:{
        type:String,
        required:true,
        max:2000,
    },
})
const Hz_Portfolio=new mongoose.model("Hz_Portfolio",Hz_Portfolio_Schema);

module.exports=Hz_Portfolio;
// Register