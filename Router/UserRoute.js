const express=require("express");
const router=express.Router();
const UserMessage=require("../src/model/schem");
const UserRegisteration=require("../src/model/registration");
const multer=require("multer");
const path=require("path")
 
router.get("/",(req,res)=>{
    res.render("index")
})
router.get("/index",(req,res)=>{
    res.render("index")
})


// contact page post method

router.post("/postmessage",async(req,res)=>{
    try{
        const newUser=await UserMessage({
            username:req.body.username,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message
        });
        const result=await newUser.save();
        console.log("Message Send! 😃 Thank You")
        res.redirect("index");
    }catch(error){
        console.log("error occured during send message"+error);
        console.log("Cannot send Message")
    };
})
// router.post("/registerUser",async(req,res)=>{
//     try{
//         const RegisterUserData=await UserRegisteration({
//                         Username:req.body.userOne,
//                         Email:req.body.email,
//                         Phone:req.body.phone,
//                         Subject:req.body.subject,
//                         Gender:req.body.gender ,
//                 })
//                 const saveUser=await RegisterUserData.save();
//                 console.log(saveUser);
//                 res.render("register");
//     }catch(error){
//         console.log("error occured during send message"+error);
//         console.log("Cannot send Message")
//     };
// })

// registration 
router.get("/RegisterUser",(req,res)=>{
    res.render("register");
})

var Storage=multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
});

var upload=multer({
    storage:Storage
}).single('file');



router.post("/registerUser",async(req,res)=>{
    try{
        const RegisterUserData=await UserRegisteration({
            Username:req.body.username,
            Email:req.body.email,
            Phone:req.body.phone,
            Subject:req.body.subject,
            Gender:req.body.gender ,
    })
    const saveUser=await RegisterUserData.save();
    console.log(saveUser);
    res.render("index");
}catch(err){console.log(err)
res.send(err)}
}) 
module.exports=router;