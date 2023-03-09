require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();

// app.use(express.json);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


// app.get('/api/words', (req, res) => {
//   res.send('got a get request')

// });
// app.put('/api/words', (req, res) => {
//   res.send('got a put request')

// });
// app.patch('/api/words', (req, res) => {
//   res.send('got a patch request')

// });

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
