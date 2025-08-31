const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


const db = require('./backend/db/db');
//database tester
db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(rows);
    console.log('DB test successful, the server will start now.');
});


// pages
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/frontend/index.html");
});

app.get("/db.html", (req, res) => {
    res.sendFile(__dirname + "/frontend/db.html");
});


// static file
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/static/style.css");
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});