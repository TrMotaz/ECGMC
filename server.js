//require express
const express=require('express');

//Require connectDB
const connectDB=require("./config/connectDB")



const authRouter=require('./Routes/auth')


//INit express
const app=express()


//Middleware==>Parse the DATA TO json
app.use(express.json())

//connectDB
connectDB()

//use routes
app.use("/api/auth",authRouter)


//Create the port
const port=5001

//lunch the server
 app.listen(port,(error)=>
 error?
 console.log(error)
 :console.log(`the server is running on  ${port}`))