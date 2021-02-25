const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/project0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

const apiroutes = require("./routes/apiroutes");
// const htmlroutes = require("./routes/htmlroutes");
app.use(apiroutes);
// app.use(htmlroutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});