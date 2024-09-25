import express from "express";
import quimical from "./routes/cobination.js";
import home from "./routes/home.js";

const app = express();
const port = 3333;

app.use("/api",quimical);
app.use("/",home);

app.listen(port,() => console.log(`http://127.0.0.1:${port}`))

