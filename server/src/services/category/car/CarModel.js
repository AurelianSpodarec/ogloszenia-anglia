const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    location: String,
    postedBy: String, // User Name

    brand: String,
    model: String,
    year: Number,
    milleage: Number,

    bodyStyle: Array,
    transmision: Array,
    fuel: Array,
    driveStrain: Array,
    seats: Number,

    coverImage: String,
    media: [{ id: Number, image: String }],
})

// CarSchema.pre('save', async function (next) {
//     const users = this.userId;
//     next()
// })

module.exports = mongoose.model("Car", CarSchema);