require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/routes")

// mengubah config
const db = process.env.DATABASE_URL;

// request

// middleware ada di sini

// controller / logika bisnis

mongoose.connect(db);
const database = mongoose.connection;

const app = express();
const port = 3000;

app.use(express.json());

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/v1/api", route)

app.listen(port, () => {
  console.log("server listening on part", +port);
});
