const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
    depositor: {type: String,  required: true},
    balance: {type: Number, Default: 0.00},
    accountNumber:{type: mongoose.Schema.Types.Number, ref: "Users", required: true},
    amount: {type: Number, required: true},
    date:{}
})

const Deposit = mongoose.model("Deposit", depositSchema)

module.exports = Deposit;