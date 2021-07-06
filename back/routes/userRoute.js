const express = require('express');
const Deposits =  require('../model/savings.model')
const Users =  require('../model/users.model')
const bcrypt =  require('bcryptjs');
const { listeners } = require('../model/savings.model');

const salt = bcrypt.genSaltSync(10);

const usersRouter = express.Router();

// sign up and get assigned 0 account balance
usersRouter.post('/register', async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, salt)
   const reqUser = req.body;
    try {
    reqUser.accountNumber = reqUser.phoneNumber.slice(1,)
        const user = new Users(reqUser);
        user.save();
        // console.log( user)

        // await Deposit.deleteMany({});

        const deposit = new Deposits({accountNumber:user.accountNumber,
            amount: 0,
            depositor: req.body.name,
            balance: 0,

        })
            deposit.save()
        console.log(deposit)

    res.send(`${user.name}, your account number is ${user.accountNumber}, please login.`)

    } catch (error) {
    console.log(error)
    }

})



usersRouter.get('/', async(req, res) => {
    // await Users.deleteMany({})

    const users = await Users.find({});

    res.send(users)
});

// route to credit account
usersRouter.patch('/deposit/:id', async(req, res) => {
    const id = req.params.id;
    // get user from db and get account number and balance
    const accountOwner = await Users.findById(id).select("accountNumber")
    console.log(accountOwner)
    const {amount, depositor, accountNumber} = req.body
    console.log(req.body)
    try {
        if(accountNumber != accountOwner.accountNumber){
            res.send(`${accountNumber} is not a valid Account number. "`)
        } else {
        //    await Deposit.deleteMany();
        console.log(`here's the accountNumber ${accountNumber}`)
            Deposits.findOneAndUpdate({accountNumber}, {$set: req.body}&& {$inc: {'balance': + req.body.amount}} , (error, foundAccount) => {
                if(error){                   
                        console.log(error)
                        // foundAccount.inc('foundAccount.balance': + foundAccount.amount)
                    }
                    console.log(`found account ${foundAccount}`)

                    res.send(`You have credited ${foundAccount.accountNumber} with ${amount}.`)
            })
                              
            }
    
        
        
    } catch (error) {
        console.log(error)
    }
} )

// get account details
usersRouter.get('/:id/account', async(req, res) => {
   
    const userDetail = await Users.findById(req.params.id).select("accountNumber")

 
    console.log(typeof userDetail.accountNumber)


 
 const accountDetails = await Deposits.findOne({accountNumber : userDetail.accountNumber}, "accountNumber balance", (err, accountInfo) => {
if(err){
    console.log(`There was an error as ${err}`)
}
     console.log( accountInfo)

 })
 
 res.send("Youre here")
})

module.exports = usersRouter;