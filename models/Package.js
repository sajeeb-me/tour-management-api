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
        enum: {
            values: ['Family', 'Couple', 'Group', 'Flight', 'Corporate'],
            message: "Package type can't be {VALUE}, must be Family/Couple/Group/Flight/Corporate"
        }
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    features: {
        type: String,
        required: true,
    },
    totalViews: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

// packageSchema.post('save', function (next) {
//     console.log('before saving data');

//     this.totalViews = parseInt(this.totalViews) + 1;

//     next();
// })

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;