const express = require("express");
const router = express.Router();
const { getItems, createItem, deleteItem, editItem } = require("../controllers/ItemController");

router.get("/", getItems)
router.post("/", createItem)
router.delete("/:id", deleteItem)
router.put("/:id", editItem)

module.exports = router;
