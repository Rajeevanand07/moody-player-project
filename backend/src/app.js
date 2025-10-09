const express = require("express");
const songRouter = require('./routes/song.route')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

app.use('/',songRouter)

module.exports = app;
