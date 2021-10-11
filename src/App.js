import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoLists from './TodoLists';

const App = () => {
  //hooks
  const [inputlist, setInputList] = useState("apples");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };
  const listItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
      
    });

    setInputList("");

  };

  // const markTodo = (id) =>{
  //   //console.log("marked");
  //  return
  //    if(id==true)
  //  id.toggle('checked')
   
  // };

  const handleToggle = (id) => {
    let mapped = TodoLists.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoLists(mapped);
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

        <input id="input" text="text" value={inputlist} placeholder="Add item to the list" onChange={itemEvent} />
        <button onClick={listItems}> + </button>

        <ol>
          {items.map((itemval, index) => {
            console.log("item");
            return <TodoLists key={index} id={index} text={itemval}
              onSelect={deleteItems} onCheck={handleToggle} />;
             
              


          })}


        </ol>

      </div>




    </div>

  </>

  );
}

export default App;



