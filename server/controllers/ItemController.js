const Item = require("../models/Items")

//ambil data
const getItems = async(req, res) => {
    const items = await Item.find()
    res.json(items)
}

//tambah data
const createItem = async(req, res) => {
    try{
        let result
        
        if(Array.isArray(req.body)) {
            result = await Item.insertMany(req.body)
        } else {
            const newItem = new Item(req.body)
            result = await newItem.save()
        }
        res.json(result)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

//delete data
const deleteItem = async(req, res) => {
    try{
        const deleted = await Item.findByIdAndDelete(req.params.id)

        if(!deleted) {
            return res.status(404).json({ message: "Item not found"})
        }

        res.json({ message: "Item deleted successfully"})
    } catch(error) {
        res.status(500).json({ message: error.message})
    }
}

//update/edit
const editItem = async(req, res) => {
    try{
        const edited = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        )

        if(!edited) {
            return res.status(404).json({ message: "item not found"})
        }

        res.json(edited)
    }catch(error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getItems, createItem, deleteItem, editItem}