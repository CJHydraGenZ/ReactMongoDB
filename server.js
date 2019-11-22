const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const item = require("./routes/api/items");

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

// DB Config

const db = require("./config/keys").mongoURL;

//connect to mongo

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Connected....");
  })
  .catch(err => console.log(err));

//use Routes

app.use("/api/items", item);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Berjalan Pada port ${port}`));
