const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const itemsRoutes = require("./routes/ItemRoutes")

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo dah connect bang"))
    .catch(err => console.log(err))

app.use("/api/items", itemsRoutes)

app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT}`)
)