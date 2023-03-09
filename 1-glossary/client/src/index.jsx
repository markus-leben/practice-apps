import React, {useState} from "react";
import { render } from "react-dom";
import AddForm from './components/AddForm.jsx';
import EntryList from './components/EntryList.jsx';
import FilterBox from './components/FilterBox.jsx';

const App = () => {
  const [wordDict, setWordDict] = useState(
    {
      "Apple": "Like Papple but with an A.",
      "Testword": "A word that only exists in tests, like 'loquatious'.",
      "Markus": "Awesome, singular, humble.",
      "Four" : "Bigger than three, smaller than a billion."
    }
  );

  const [filter, setFilter] = useState("");
  // ordinarily I wouldn't hand off a set function, but this one is pretty bone simple.

  const addWordToList = (wordObject) => {
    // console.log(wordObject);
    let wordClone = Object.assign({}, wordDict, wordObject);
    setWordDict(wordClone);
  }

  const changeWordInList = (oldWord, wordObject) => {
    let wordClone = Object.assign({}, wordDict);
    delete wordClone[oldWord];
    wordClone = Object.assign(wordClone, wordObject);
    setWordDict(wordClone);
  }


  const removeWordFromList = (word) => {
    let wordClone = Object.assign({}, wordDict);
    delete wordClone[word];
    setWordDict(wordClone);
  }



  // const removeIndexFromList = (delIndex) => {
  //   let wordClone = wordList.slice();
  //   wordClone.splice(delIndex, 1);
  //   for (let word = delIndex; word < wordClone.length; word++) {
  //     wordClone[word]['index'] -= 1;
  //   }
  //   setWordList(wordClone);
  // }

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
