require("dotenv").config();
require("./utils/db");
const express = require("express");
const router = require("./routes/toDoRoute");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, (err, result) => {
  console.log(`Server Running At http://localhost:${port}`);
});
