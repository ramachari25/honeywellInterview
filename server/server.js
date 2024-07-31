import express from 'express'
import cors from 'cors'
import internetPackageRouter from './routes/internetPackDetails.js'
const port =5000
const app=express()
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/api',internetPackageRouter)
app.listen(port,()=>console.log(`ServerRunning ${port}`))

