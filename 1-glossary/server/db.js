const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/glossary');

const wordSchema = {
  word: {type: String, unique: true},
  definition: String
};

const Words = mongoose.model('Words', wordSchema);

const addOrReplace = (word, definition) => {
  return Words.findOneAndUpdate({word: word}, {word: word, definition: definition}, {upsert: true})
};

const remove = (word) => {
  return Words.findOneAndDelete({word: word})
};


//use findoneandupdate

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them