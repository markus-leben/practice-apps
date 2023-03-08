import React, {useState} from "react";
import { render } from "react-dom";
import AddForm from './components/AddForm.jsx';
import EntryList from './components/EntryList.jsx';
import FilterBox from './components/FilterBox.jsx';

const App = () => {
  const [wordList, setWordList] = useState(
    [
      {word: "Apple",
      definition: "Like Papple but with an A."},
      {word: "Testword",
      definition: "A word that only exists in tests, like 'loquatious'."},
      {word: "Markus",
      definition: "Awesome, singular, humble."},
      {word: "Four",
      definition: "Bigger than three, smaller than a billion."},
    ]
  )

  const addWordToList = (wordObject) => {
    setWordList([...wordList, wordObject])
  }

  return(
    <div>
      <AddForm handFormToParent={addWordToList}/>
      <FilterBox/>
      <EntryList wordList={wordList}/>
    </div>

  )
}


render(
  <App/>,
  document.getElementById("root")
);
