const express = require("express");
const app = express();
const cors = require("cors");
const dBCSonnection = require("./database/db");
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cors());

const authRouter = require("./routers/auth.router");
const categoryRouter = require("./routers/category.router");

app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);

dBCSonnection();
 
const port = process.env.PORT || 5000;

 
app.listen(port, () => console.log(`Uygulama http://localhost:${port} portunda ayağa kalktı`));
