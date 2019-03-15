const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title : {
        type : String,
        required : 'Title Required',

    },
    author : {
        type : String,
        required : 'Author is reauired',
    },
    description : {
        type : String,
        required : 'Description is reauired',
    }
})

module.exports = Todo = mongoose.model('Todo' , TodoSchema);