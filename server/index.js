require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { log } = require("console");
const port = process.env.DB_PORT;

app.use(express.json());
app.use(cors());

//database integration 
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection
    db.once('open',()=>{
        console.log("mongodb connection success!")
    })

app.get("/", (req,res) =>{
    res.send("Express App is running")

})

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'));

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
});

const Product = mongoose.model("product",{
    id:{
        type:Number,
        required:true,

    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,    
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avaliable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
     const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

     });
     console.log(product);
     await product.save();
     console.log("saved");
     res.json({
        success:true,
        name:req.body.name,
     })
})

app.listen(port,(error) =>{
    if(!error){
        console.log("server Running on port "+port)
    }else{
        console.log("error:"+error)
    }
});

//video ended at 5 : 40 : 00