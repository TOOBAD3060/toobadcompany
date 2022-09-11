require("dotenv").config()
const express= require("express")
const bodyParser= require("body-parser")
const mongoose=require("mongoose") 
const ejs=require("ejs")
const bcrypt= require("bcrypt")
const saltRounds= 10;
const nodeMailer= require("nodemailer")
const flash = require("connect-flash")

mongoose.connect(process.env.CONNECT_KEY,{useNewUrlParser : true},(err)=>{
    if(!err){
        console.log("connected to db")
    }
    else{
        console.log(err)
    }
})

const app = express();
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

// Connect flash
// app.use(flash());
// Global vars
// app.use((req,res,next)=>{
//     res.locals.success_msg=req.flash("success_msg")
//     res.locals.error_msg=req.flash("error_msg")
//     res.locals.error=req.flash("error")
//     next();
// })

//  User Model
const User = require("./userModel");

//  Email Sender Details
const transporter = nodeMailer.createTransport({
    service : 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.password
    },
    tls:{
        rejectUnauthorized : false
    }
    
})

//          User Routes
//  Handling get request
let mailExistence;
app.get("/",(req,res)=>{
 res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/verify",(req,res)=>{
  res.render("verify")    
})
app.get("/signUp",(req,res)=>{
  res.render("signUp",{mailExistence})
})





//  Handling post request to Signup
app.post("/signUp",(req,res)=>{
    
    const {firstName,lastName,email,password} = req.body;
  User.findOne({email},(err,foundMail)=>{
    if(foundMail){
        // res.send("Email is already registered");
        
        res.render("signUp",{mailExistence : "Email is already registered"})
    }
    else{
   
        bcrypt.hash(password,saltRounds,(err,hash)=>{

            const newUser= new User({
                firstName,
                lastName,
                email,
                password:hash,
                emailToken:Math.floor(Math.random()*999999),
                isVerified: false
            })
    
            newUser.save((err)=>{
                if(err){
                    console.log(err)
                    res.redirect("/login")
                }
                else{
                    console.log("New User Saved")
                    const mailOptions = {
                        from : ` "Verify your email" <olalerebabatunde2000@gmail.com>` ,
                        to : newUser.email,
                        subject : 'TOOBAD Technologies - Verify your email' ,
                         text:` Dear ${newUser.lastName}, Kindly use ${newUser.emailToken} for your verification`
                        }
            
            //  Sending Mail
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
             console.log(error)
                }
                else{
                    console.log("Verification email is sent to your mail")
                }
            })
        }
            res.redirect("/verify")
            })
    
        })
    }

  })

})

//Handling Post request to login route

app.post("/login",(req,res)=>{
    const {email,password} = req.body;

    User.findOne({email},(err,foundMail)=>{
        if(err){console.log(err)}
        else{
            if(foundMail){
                bcrypt.compare(password,foundMail.password,(error,result)=>{
                    if(error){
                        console.log(err)
                    }
                    if(result){
                        res.render("profile")
                    }
                    else{
                        res.send("Incorrect password")
                    }
                })
            }
            else{
                res.send("Email not registered")
            }
            
        }
    })
})

app.listen(process.env.PORT || 4000,()=>{
    console.log("server started on port 4000")
})








