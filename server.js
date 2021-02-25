const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGO_ATLAS_DEPLOYMENT ||
    "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const apiroutes = require("./routes/apiroutes");
// const htmlroutes = require("./routes/htmlroutes");
app.use(apiroutes);
// app.use(htmlroutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});