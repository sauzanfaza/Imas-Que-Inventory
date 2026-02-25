const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    image: String,
    name: String,
    stock: Number,
    price: Number
}, {timestamps: true})

module.exports = mongoose.model("Item", itemSchema)