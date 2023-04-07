import mongoose from "mongoose"
// const {schema}  = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        // required: true
    },
    description: {
        type: String,
        required: true
    }, 
    rating : {
        type: String,
        // required: true
        min: 0, 
        max: 5
    },
    rooms: {
        type: [String]
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model("Hotel", HotelSchema)