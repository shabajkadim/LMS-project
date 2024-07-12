import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'
import AllRoutes from './Router/index.js'

const app=express()
const port=process.env.PORT 

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
app.listen(port,()=>{ 
    console.log("port running 8000");
})