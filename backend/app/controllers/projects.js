const Project = require('../models/projects');

// GET all projects (public)
exports.list = async (req, res) => {
    try {
        const data = await Project.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET one project (public)
exports.read = async (req, res) => {
    try {
        const data = await Project.findById(req.params.id);
        if (!data) return res.status(404).json({ error: "Project not found" });
        res.json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// POST create (protected)
exports.create = async (req, res) => {
    try {
        const obj = new Project(req.body);
        await obj.save();
        res.json(obj);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT update (protected)
exports.update = async (req, res) => {
    try {
        const updated = await Project.findByIdAndUpdate(
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
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "Project deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
