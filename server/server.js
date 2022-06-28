require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL, () => {console.log("Connected to Database")});

app.get('/', (req, res) => {
    res.json({ message: "Hey Man" });
  })

app.listen(parseInt(process.env.PORT), () => console.log(`Server Started on Port ${parseInt(process.env.PORT)}`));