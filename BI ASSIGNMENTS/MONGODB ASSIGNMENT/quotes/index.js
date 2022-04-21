import express from "express" 
import bodyParser from "body-parser"
import quoteRouter from "./route/quotes.js"
import mongoose from 'mongoose'

const dbURI='mongodb+srv://amey96:amey96@cluster0.b70kh.mongodb.net/quote?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(
        (result) => {
            console.log("Connected to the Database")
            server.listen(PORT)
            console.log("Server started successfully")
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )

const server=express()
const PORT=8888
server.use(bodyParser.json())

// server.get("/",(req,res)=> res.send("Welcome to my library"))
var homepage=(req,res)=> res.send("Welcome to my library") //handle http://localhost:8888/
server.use("/quote",quoteRouter)
server.get("/",homepage)