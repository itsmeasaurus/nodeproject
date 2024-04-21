const mongoose = require('mongoose')
const Schema = mongoose.Schema

// make schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: Text,
        required: true
    }
}, { timestamps: true })

// create model by using schema
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog