const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
// app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/apiroutes"))
    // app.use(require("./routes/htmlroutes.js"));
app.use(require("./routes/htmlroutes"));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});



// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// // const apiroutes = require("./routes/apiroutes.js");
// const PORT = process.env.PORT || 3000;

// // const db = require("./models");

// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/workout', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         // useCreateIndex: true,
//         useFindAndModify: false
//     }
// );

// app.use(require("./routes/apiroutes.js"));
// app.use(require("./routes/htmlroutes.js"));
// // app.use(apiroutes);
// // app.use(htmlroutes);

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
// });