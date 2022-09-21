const LocalStrategy= require("passport-local").Strategy;
const mongoose=require("mongoose")
const bcrypt= require("bcrypt")


// Load User Model
const User= require("../userModel")



const passportImplementation= function(passport){
   passport.use(
    
        new LocalStrategy({usernameField:"email"},(email,password,done)=>{
        //match user
        User.findOne({email:email},(err,foundEmail)=>{
         if(!foundEmail){
            return done(null,false,{
                message:"That email is not registered",
                email,
                password
            })
         }
        //  Verified user
        if(foundEmail.isVerified){
         //match password
         bcrypt.compare(password,foundEmail.password,(err,isMatch)=>{
           
            if(err){
                console.log(err)
            }
            if(isMatch){
                return done(null,foundEmail)
            }
            else{
                return done(null,false,{
                    message:"Password incorrect",
                    email,
                    password
                })
            }
         })
        }
        else{
            return done(null,false,{
                message:"Email not verified",
                email,     
                password       
            })
        }



        })
    })
   )
   
   passport.serializeUser((user,done)=>{
    done(null,user.id);
   });
   passport.deserializeUser((id,done)=>{
    User.findById(id,function(err,user){
        done(err,user);
    })
   })
}

module.exports=passportImplementation;
