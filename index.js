const express=require('express')
const cors=require("cors")
const app=express()
const { connectDB } = require('./config/dbConnection')

app.use(express.json({ limit: '100mb', extended: true }))

const corsOption = {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
}
app.use(cors(corsOption))
const userRouter=require("./routes/userRoute")

app.use("/",userRouter)

const PORT=3000
connectDB()
const server=app.listen(PORT,()=>{
    console.log(`Server connected on PORT: ${PORT}`);
})