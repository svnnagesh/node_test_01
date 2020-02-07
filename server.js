const express = require('express');
const app = express();
const port = 3100;
const users = require('./routes/users');
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Welcome to my world !!!');
})

app.post('/hello', (req, res) => {
    res.send('Helloooooo');
})

//app.use('/users', users)


app.listen(port, () => {
    console.log(`Port running on ${port}`);
})