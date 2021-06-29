const express = require('express');

const savingsRouter = express.Router();

savingsRouter.post('/savings', (req, res) => {

    res.send("You saved!")

})



savingsRouter.get('/savings', (req, res) => {
    res.send("It's up for saving!")
});

module.exports = savingsRouter;