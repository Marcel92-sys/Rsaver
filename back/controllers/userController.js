const Users = require("../model/users.model")
const bcrypt = require ('bcryptjs');


// const verifiedPassword = bcrypt.compareSync(req.body.password, existingPassword.password)

const checkPhoneNumber = async(req, res, next) => {

    const phoneNumber = await Users.findOne({phoneNumber: req.body.phoneNumber})

    if(phoneNumber){
        next()

    } else{
        res.send("No user exist with this unique Phone number.")
    }
    
}


module.exports = {checkPhoneNumber}