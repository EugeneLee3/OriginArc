// Importing dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

//
const { generateNameRoutes } = require('./routes/generateNameRoutes');

//
const app = express();
app.use(express.json()); // enables JSON request bodies
app.use(cors());

//
app.use(generateNameRoutes(express, cors));

const startServer = async () => {
  try {
    console.log('server started')

    // Port
    const port = process.env.PORT;

    //
    app.listen(port, () => {
      console.log(`Listening on Port ${port}`);
});
  } catch (error) {
      console.log(error);
  }
};

startServer();
