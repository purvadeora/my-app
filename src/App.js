
import logo from './logo.svg';
import './App.css';
import React, { useState ,useEffect } from 'react';
import TodoLists from './TodoLists';


const getlocalItems = () => {
  let item = window.localStorage.getItem("items");
  if (item) {
      return JSON.parse(window.localStorage.getItem('items'));

  } else {
      return [];
  }
}

const App = () => {
  //hooks
  const [newItem, setNewItem] = useState("apples");
  const [items, setItems] = useState( () => getlocalItems());

  
  useEffect(() => window.localStorage.setItem("items", JSON.stringify(items)), [items]);
  

  const itemEvent = (event) => {
    setNewItem(event.target.value);

  };
  const addNewListItem = () => {
    setItems((oldItems) => {
      return [ { title: newItem, checked: false } ,...oldItems ];

    });

    setNewItem("");

  };
  const handleToggle = (id) => {
    console.log("checked");
    console.log(id);
    let mapped = items.map((task , index) => {
      return index == id ? { ...task, checked: !task.checked } : { ...task };
    });
    setItems(mapped);
  }

  const deleteItems = (id) => {

console.log({id});
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });

    });

  };
  const sortByAscending =() => {
    console.log("sortedlist");
    
    let sortedAsceding = items.sort((a,b) => {
      // let x = a.type.toLowerCase();
      // let y = b.type.toLowerCase();
       if(a.title < b.title){
        console.log("return -1") ;
        
        return -1; }
        console.log(a.title ,b.title);
      if(a.title > b.title){
        console.log("return 1") ;
        
        return 1;}
      return 0;
      });
   
     console.log({sortedAsceding ,items});
     setItems(sortedAsceding);
    
  };
  
  
  console.log({items});

  return (<>

    <div className="container">
      <div className="center">

        <h1> My To DO List </h1>

        <input id="input" text="text" value={newItem} placeholder="Add item to the list" onChange={itemEvent} />
        <button onClick={addNewListItem}> + </button>
        <button onClick={sortByAscending}>Sort</button>

        <ol>

          {items.map((itemval, index) => {
            console.log("item", itemval);
            return <TodoLists text={itemval.title} key={index} id={index}  checked={itemval.checked}
              onSelect={deleteItems} onCheck={handleToggle} />;




          })}


        </ol>

      </div>




    </div>

  </>

  );
}

export default App;

