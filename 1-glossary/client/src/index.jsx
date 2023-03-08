import React from "react";
import { render } from "react-dom";
import AddForm from './components/AddForm.jsx';
import EntryList from './components/EntryList.jsx';
import FilterBox from './components/FilterBox.jsx';

render(
  <div>
    <p>Hello, World!</p>
    <AddForm/>
    <EntryList/>
    <FilterBox/>
  </div>,
  document.getElementById("root")
);
