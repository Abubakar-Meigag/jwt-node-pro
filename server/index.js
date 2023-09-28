require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require('./db');

const port = process.env.PORT || 5080;

// connection();

app.use(cors());
app.use(express.json());








app.listen(port, () => console.log(`Listening on port ${port}`));