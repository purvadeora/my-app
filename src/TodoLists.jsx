import React from 'react';




const TodoLists = (props) => {

  const handleDelete = () => { props.onSelect(props.id); } 

  return (

    <>
       <div className="todo_style" >

      
       { props.checked == false ?
           (<li  onClick={() => props.onCheck(props.id) }> {props.text} </li>) 
        :
            (<li  className= "checkedItem" onClick={() => props.onCheck(props.id) }> {props.text} </li>) }

        <span className="delete"

          onClick={handleDelete} >x</span>


      </div>

    </>

  )

};
export default TodoLists;

//<i class="fa fa-trash-o" aria-hidden="true"></i>
// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
// import TodoLists from './TodoLists';

// const App = () => {
//   //hooks
//   const [inputlist, setInputList] = useState("apples");
//   const [items, setItems] = useState([]);

//   const itemEvent = (event) => {
//     setInputList(event.target.value);

//   };
//   const listItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputlist];

//     });

//     setInputList("");

//   };

//   const deleteItems = (id) => {
//     console.log("deleted");

//     setItems((oldItems) => {
//       return oldItems.filter((arrElem, index) => {
//         return index !== id;
//       });

//     });

//   };


//   return (<>

//     <div className="container">
//       <div className="center">

//         <h1> My To DO List </h1>

//         <input id="input" text="text" value={inputlist} placeholder="Add item to the list" onChange={itemEvent} />
//         <button onClick={listItems}> + </button>

//         <ol>
//           {items.map((itemval, index) => {
//             console.log("item");
//             return <TodoLists key={index} id={index} text={itemval}
//               onSelect={deleteItems} />;




//           })}


//         </ol>

//       </div>




//     </div>

//   </>

//   );
// }

// export default App;



