const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://user:6X4YhRD4xAJRCGKb@cluster0.kwk6bly.mongodb.net/", {
                useNewUrlParser: true
            }
        );
    } catch (err) {
        console.error("Error connection to mongodb");
        console.error(err);
    }
}

module.exports = {
    connect
}