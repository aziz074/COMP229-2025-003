const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,   // URL to project image
        default: ""
    },
    link: {
        type: String,   // GitHub / Portfolio link
        default: ""
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "projects"
});



module.exports = mongoose.model("Project", ProjectSchema);
