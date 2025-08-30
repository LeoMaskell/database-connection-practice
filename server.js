const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());

// pages
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/frontend/index.html");
});

// styles
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/static/style.css")
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});