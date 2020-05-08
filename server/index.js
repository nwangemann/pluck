require("dotenv").config();
const {upload} = require('./upload')
const express = require("express");
const { SERVER_PORT} = process.env;
const multer = require('multer')
const cors = require('cors');
const app = express();

app.use(cors(corsOptions));

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};
app.post('/api/video', upload)


app.listen(SERVER_PORT, () =>
  console.log(`Servin' up some 🔥 🔥 🔥 on Port ${SERVER_PORT}`)
);