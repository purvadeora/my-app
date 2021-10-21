import React from 'react';




const TodoLists = (props) => {

  const handleDelete = () => { props.onSelect(props.id); } 

  return (

    <>
       <div className="todo_style" >

      
       { props.checked === false ?
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



