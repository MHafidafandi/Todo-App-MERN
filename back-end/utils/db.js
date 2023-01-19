require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then((res) => console.log("Database Connected"))
  .catch((err) => console.log(err));
