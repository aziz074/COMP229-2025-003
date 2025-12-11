const Inventory = require('../models/inventory');

// GET ALL ITEMS
exports.list = async (req, res) => {
    try {
        const items = await Inventory.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET ONE ITEM BY ID
exports.read = async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id);
        if (!item) return res.status(404).json({ error: "Item not found" });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CREATE ITEM
exports.create = async (req, res) => {
    try {
        const newItem = new Inventory(req.body);
        await newItem.save();
        res.json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE ITEM
exports.update = async (req, res) => {
    try {
        const updated = await Inventory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) return res.status(404).json({ error: "Item not found" });

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ITEM
exports.remove = async (req, res) => {
    try {
        const deleted = await Inventory.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Item not found" });

        res.json({ message: "Item deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
