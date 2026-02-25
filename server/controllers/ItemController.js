import item from "../models/Items"

export const createItem = async(req, res) => {
    try{
        const Item = await item.create(req.body)
        res.status(201).json(item)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}