import React, {useState} from "react";
import { render } from "react-dom";
import AddForm from './components/AddForm.jsx';
import EntryList from './components/EntryList.jsx';
import FilterBox from './components/FilterBox.jsx';

const App = () => {
  const [wordList, setWordList] = useState(
    [
      {word: "Apple",
      definition: "Like Papple but with an A.",
      index: 0},
      {word: "Testword",
      definition: "A word that only exists in tests, like 'loquatious'.",
      index: 1},
      {word: "Markus",
      definition: "Awesome, singular, humble.",
      index: 2},
      {word: "Four",
      definition: "Bigger than three, smaller than a billion.",
      index: 3},
    ]
  );

  const [filter, setFilter] = useState("");
  // ordinarily I wouldn't hand off a set function, but this one is pretty bone simple.

  const addWordToList = (wordObject) => {
    wordObject.index = wordList.length;
    setWordList([...wordList, wordObject])
  }

  return(
    <div>
      <AddForm handFormToParent={addWordToList}/>
      <FilterBox parentFilter={filter} handFilterToParent={setFilter}/>
      <EntryList wordList={wordList}/>
    </div>

  )
}


render(
  <App/>,
  document.getElementById("root")
);
