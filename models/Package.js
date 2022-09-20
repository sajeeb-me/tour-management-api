const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema design
const packageSchema = Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this package."],
        trim: true,
        unique: [true, "Name must be unique."],
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price can't be negative"],
    },
    packageType: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    features: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;