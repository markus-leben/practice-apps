import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import AddForm from './components/AddForm.jsx';
import EntryList from './components/EntryList.jsx';
import FilterBox from './components/FilterBox.jsx';
import axios from 'axios';

const App = () => {
  const [wordDict, setWordDict] = useState({});

  const [filter, setFilter] = useState("");
  // ordinarily I wouldn't hand off a set function, but this one is pretty bone simple.

  const addWordToList = (word, definition) => {
    // console.log(wordObject);
    let wordClone = Object.assign({}, wordDict);
    wordClone[word] = definition;
    setWordDict(wordClone);
    axios.post('/api/words', {word: word, definition: definition})
    .catch((err) => {
      console.log("WORD LIST ADD FAILED")
    })
  }

  const changeWordInList = (oldWord, word, definition) => {
    let wordClone = Object.assign({}, wordDict);
    delete wordClone[oldWord];
    wordClone[word] = definition;
    setWordDict(wordClone);
    axios.patch('/api/words', {oldWord: oldWord, word: word, definition: definition})
    .catch((err) => {
      console.log("WORD LIST EDIT FAILED")
    })
  }

  const removeWordFromList = (word) => {
    let wordClone = Object.assign({}, wordDict);
    delete wordClone[word];
    setWordDict(wordClone);
    axios.delete('/api/words', {data: {word: word}})
    .catch((err) => {
      console.log("WORD LIST DELETE FAILED")
    });
  }


  useEffect(() => {
    axios.get('/api/words').then((results) => {
      let newDict = {};
      for (let item of results.data) {
        newDict[item.word] = item.definition;
      }
      console.log(newDict)
      setWordDict(newDict);
    });
  }, [])

  return(
    <div>
      <AddForm handFormToParent={addWordToList}/>
      <FilterBox parentFilter={filter} handFilterToParent={setFilter}/>
      <EntryList
        filter={filter}
        wordDict={wordDict}
        remove={removeWordFromList}
        handFormToParent={changeWordInList}/>
    </div>

  )
}


render(
  <App/>,
  document.getElementById("root")
);
