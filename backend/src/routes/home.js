import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const home = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

home.get("/", (req, res) => {
    const fileLocation = path.join(__dirname, '../../../frontend/home.html');
    res.sendFile(fileLocation);
});

export default home;
