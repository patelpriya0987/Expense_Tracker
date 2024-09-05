const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
        type:{ 
            type: String, 
            required: true
        },
        category: { 
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true 
        },
        description: String,
        date: { 
            type: Date, 
            default: Date.now 
        }
})

const todoModel = mongoose.model('db_crud',todoSchema);

module.exports = todoModel;