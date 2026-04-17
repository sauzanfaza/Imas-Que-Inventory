const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    price: Number,
    image: String,
})

module.exports = mongoose.model("Item", itemSchema)