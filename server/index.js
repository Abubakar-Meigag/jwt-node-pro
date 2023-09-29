require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const port = process.env.PORT || 5080;

connection();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(port, () => console.log(`Listening on port ${port}`));
