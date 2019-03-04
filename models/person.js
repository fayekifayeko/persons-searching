import mongoose from 'mongoose';

const schema = mongoose.Schema;

// create geo schema
const geoSchema = new schema(
    {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            index: "2dsphere"
        }
    }
);

// create person schema and model
const personSchema = new schema(
    {
        firstName: {
            type: String,
            required: [true, 'First Name is required']
        },
        lastName: {
            type: String
        },
        available: {
            type: Boolean,
            default: false
        },
        geometry: geoSchema
    }
);

const person = mongoose.model('person', personSchema);
module.exports = person;