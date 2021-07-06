const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const usersRoute = require('./routes/userRoute');

const app = express();

// connection();
const URI = "mongodb+srv://marcel:hkqaNxvXNJ0TTTTW@cluster0.fgvd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"




const port = 5000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }))
app.use(cors());


// db

mongoose.connect(URI, {
    useNewUrlParser: true, useCreateIndex: true,useFindAndModify:false, useUnifiedTopology: true})
    .catch(error => handleError(error));

mongoose.connection.on('open', () => {
console.log("Db connected")
})

// routes

app.use('/v1/users', usersRoute)

app.get('/', (req, res) => {
    res.send("It's up!")
})


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})




 


     
