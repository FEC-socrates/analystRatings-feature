const express = require('express');
const app = express();
const port = 8080;
const db = require('../database/index.js');
// const faker = require('faker');
// console.log(db)



app.listen(port, () => console.log(`listening on port ${port}!`))

