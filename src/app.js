const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const path=require("path");
const hbs=require("hbs"); 
require("./conn/conn");
const UserRoute=require("../Router/UserRoute");
const morgan = require("morgan");
const helmet = require("helmet");
const port=process.env.PORT|| 7000;



// adding middlewares
app.use(express.json()); 
app.use(morgan("common")); 

app.use(helmet());
app.use(express.urlencoded({extended:false}));


// setting filePaths
const StaticFiles=path.join(__dirname,"../public/");
const hbsFiles=path.join(__dirname,"../hamza/");

// set the handlebars
app.set("view engine","hbs");
app.set("views",hbsFiles); 


// set static folder
app.use(express.static(StaticFiles));


// setting user routes
app.use("/",UserRoute); 

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

