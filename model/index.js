const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    author:{
        required: false,
        type: String,
    },
    title:{
        required: false,
        type: String,
    },
    description:{
        required: false,
        type: String,
    },
    url:{
        required: false,
        type: String,
    },
    urlToImage:{
        required: false,
        type: String,
    },
    publishedAt:{
        required: false,
        type: String,
    },
    content:{
        required: false,
        type: String,
    }
});

module.exports = mongoose.model('savedNews',dataSchema);
