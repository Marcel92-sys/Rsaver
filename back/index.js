const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const savingsRoute = require('./routes/route');



const app = express();

const port = 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use(cors());


// routes

app.use('/', savingsRoute)

app.get('/', (req, res) => {
    res.send("It's up!")
})


const uri = "mongodb+srv://<username>:kPaPUQnDFH4Jk3oJ@cluster0.40knj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(uri, {

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

 mongoose.connection.once('open', () => {


     
     app.listen(port, () => {
         console.log(`Server started on http://localhost:${port}`)
     })

 })
