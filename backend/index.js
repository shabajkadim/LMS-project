import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'
import AllRoutes from './Router/index.js'

const app=express()


// console.log(port,"port");
app.use(cors())
app.use(express.json())
dotenv.config()


app.get('/',(req,res)=>{
    res.send("home page")
})

app.use('/api/v1',AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(
    () => {
      console.log("Database connected..");
    }
  );
app.listen(5000,()=>{ 
    console.log("port running 5000");
})