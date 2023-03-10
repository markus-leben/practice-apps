const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/glossary');

const wordSchema = {
  word: {type: String, unique: true},
  definition: String
};

const Words = mongoose.model('Words', wordSchema);

const getAll = () => {
  return Words.find({});
}

const addOrReplace = (wordObj) => {
  console.log(wordObj)
  return Words.findOneAndUpdate({word: wordObj.word}, {word: wordObj.word, definition: wordObj.definition}, {upsert: true})
};

const remove = (word) => {
  return Words.findOneAndDelete({word: word})
};

module.exports.getAll = getAll;
module.exports.addOrReplace = addOrReplace;
module.exports.remove = remove;


//use findoneandupdate

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them