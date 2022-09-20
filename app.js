const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


// middleware
app.use(express.json());
app.use(cors());

// all routes
const packageRoute = require('./routes/package.route');


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('api/v1/package', packageRoute)


module.exports = app;