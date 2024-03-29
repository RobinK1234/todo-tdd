const express = require('express')
const app = express()
const todoRoutes = require("./routes/todo.routes")
const mongodb = require("./mongodb/mongodb.connect")


mongodb.connect()

app.use(express.json());

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({ message: error.message });
});

app.use("/todos", todoRoutes);

app.get('/', (req, res) => {
    res.send('Express test')
})

module.exports = app