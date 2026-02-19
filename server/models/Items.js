const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    stock: Number,
    price: Number
}, {timestamps: true})

module.exports = mongoose.model("Item", itemSchema)