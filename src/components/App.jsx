import React, { useState } from "react";

function App() {
  const [addedItem, setAddedItem] = useState("");
  const [arrayItem, setArrayItem] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setAddedItem(newValue);
    // console.log(newValue);
  };

  const handleAdd = () => {
    setArrayItem((preValue) => {
      return [...preValue, addedItem];
    });
    setAddedItem("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={addedItem} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arrayItem.map((items) => {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
