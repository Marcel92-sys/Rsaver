const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, unique:true},
    phoneNumber: {type: String, unique:true},
    email: {type: String, unique:true},
    password: {type: String, required: true},
    accountNumber: {type: Number, unique: true, required: true},
    deposit:[{type: mongoose.Schema.Types.ObjectId, ref: "Deposit"}]

})

const Users = mongoose.model("Users", userSchema)

module.exports = Users;