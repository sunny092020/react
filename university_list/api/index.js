const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const subscriptionRoute = require("./routes/subscription");

dotenv.config();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/subscription", subscriptionRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
