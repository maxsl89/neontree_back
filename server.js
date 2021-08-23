const express = require("express");
// const mongoose = require("mongoose");
const http = require("http");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const neontreeRouter = require("./routes/neontreeRoutes");

dotenv.config({ path: "./config.env" });

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB connection successful!"));

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

app.use("/api/v1/neontree", neontreeRouter);

const app_server = http.createServer(app);

const port = 3210;
app_server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
