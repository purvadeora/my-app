import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoLists from './TodoLists';

const App = () => {
  //hooks
  const [newItem, setNewItem] = useState("apples");
  const [items, setItems] = useState([{title:"Apple" , checked: true}]);

  const itemEvent = (event) => {
    setNewItem(event.target.value);

  };
  const addNewListItem = () => {
    setItems((oldItems) => {
      return [...oldItems,{title:newItem , checked: false} ];

    });

    setNewItem("");

  };

  

  const handleToggle = (id) => {
    console.log("checked");
    let mapped = TodoLists.map(task =>{
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
   // setToDoLists(mapped);
  }


  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });

    });

  };


  return (<>

    <div className="container">
      <div className="center">

        <h1> My To DO List </h1>

        <input id="input" text="text" value={newItem} placeholder="Add item to the list" onChange={itemEvent} />
        <button onClick={addNewListItem}> + </button>

        <ol>
          {items.map((itemval, index) => {
            console.log("item");
            return <TodoLists key={index} id={index} text={itemval.title} checked={itemval.checked}
              onSelect={deleteItems} onCheck={handleToggle} />;




          })}


        </ol>

      </div>




    </div>

  </>

  );
}

export default App;
