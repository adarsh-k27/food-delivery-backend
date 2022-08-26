const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors=require('cors')
const userRouter =require('./routes/user')
const productRouter=require('./routes/product')
const {
    on
} = require('./models/user')

const PORT = process.env.PORT || 8080
//mongoose configure
mongoose.connect(process.env.DB_URL)
mongoose.connection
    .on('open', () => console.log("Dtabase Connected SuccesFully"))
    .on('error', (error) => console.log("MongooseError:::", error))
    
app.use(express.json())
app.use(cors())  
app.use('/api/user',userRouter)  
app.use('/api/product',productRouter)
//server connection
app.listen(PORT, () => console.log("Connected To Port", PORT))

app.get('/', (req, res) => {
    res.send("hy im ready")
})