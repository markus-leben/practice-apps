require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.get('/api/words', (req, res) => {
  console.log( `Recieved a GET request to /api/words`)
  db.getAll().then((results) => {
    res.send(results);
  })
});

app.post('/api/words', (req, res) => {
  console.log( `Recieved a POST request to /api/words with the body ${JSON.stringify(req.body)}`)

  db.addOrReplace(req.body).then((results) => {
    res.send(results);
  })
});

app.delete('/api/words', (req, res) => {
  console.log( `Recieved a DELETE request to /api/words with the body ${JSON.stringify(req.body)}`)
  db.remove(req.body.word).then((results) => {
    res.send(results);
  })
});

app.patch('/api/words', (req, res) => {
  console.log(`got a patch request to /api/words with the body ${JSON.stringify(req.body)}`)
  db.remove(req.body.oldWord).then(() => {
    return db.addOrReplace(req.body)
  }).then((results) =>    {
    res.send(results)
  });

});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
