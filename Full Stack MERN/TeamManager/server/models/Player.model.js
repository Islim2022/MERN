const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "{PATH} is required."],
        minLength: [2, "{PATH} must be at least {MINLENGTH} charachters."]
    },
    position: { type: String }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);