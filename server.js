require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>The server is running</h1>');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
    console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
})