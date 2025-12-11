const Service = require('../models/services');

// GET all services (public)
exports.list = async (req, res) => {
    try {
        const data = await Service.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET one service (public)
exports.read = async (req, res) => {
    try {
        const data = await Service.findById(req.params.id);
        if (!data) return res.status(404).json({ error: "Service not found" });
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// POST create (protected)
exports.create = async (req, res) => {
    try {
        const obj = new Service(req.body);
        await obj.save();
        res.json(obj);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT update (protected)
exports.update = async (req, res) => {
    try {
        const updated = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE (protected)
exports.remove = async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: "Service deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
