const express = require ('express')
const mongoose = require ('mongoose')
const userRoutes = require ('./routes/userRoutes')
const thoughtRoutes = require ('./routes/thoughtRoutes')
const expressApp = express()


expressApp.use(express.json())
expressApp.use("/api/users",userRoutes)
expressApp.use("/api/thoughts", thoughtRoutes)
mongoose.connect("mongodb://localhost:27017/socialNetworkDB",{}).then(() => {
    console.log("Connected to Mongo db")
    expressApp.listen(3000, () => {
        console.log("Server is running successfully!")
    }) 
}).catch((err) => {
    console.log(err)
})