const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Contact = require('./routes/Contact');
app.use('/api', Contact);



// connection from Mongoose to MongoDB
const connectToDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
connectToDB();

const port = 3000;
app.listen(port, () => {
    console.log('Server Started Successfully');
});