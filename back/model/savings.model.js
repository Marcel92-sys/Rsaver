const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {type: String, unique:true},
    account: {type: Number, unique: true},
    balance: {type: Number}

})

const Accounts = mongoose.model("Accounts", accountSchema)

export default Accounts