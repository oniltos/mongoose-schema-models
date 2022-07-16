import mongoose from 'mongoose'

function catName(value) {
    return 'Gata ' + value
}

const catSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        set: catName
    },
    color: { type: String, enum: ['white', 'black', 'frajola'], required: true},
    age: { type: Number, min: 0, max: 50 },
    country: {
        type: String,
        match: /^[A-Z]{2}$/
    },
    created: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Cat', catSchema)