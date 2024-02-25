const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    id : {
        type  : Number,
        required : true,
        unique : true
    },
    title : {
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    image : {
        type : String,
        unique : true
        
    },
    sold : {
        type : Boolean,
        default : false
    },
    dateOfSale : {
        type : Date
    }
},{timestamps:true});

const Transaction = mongoose.model('Transaction',transactionSchema);

module.exports = Transaction;
