import React from "react";
import { useState, useEffect } from "react";

export default function App() {
    const [Todo, setTodo] = useState("");
    const [Todos, setTodos] = useState([]);

    const savedTodos = localStorage.getItem("Todos");


    if (savedTodos) {
        return JSON.parse(savedTodos);

    } else {
        return [];
    }
}
  useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(Todos));
    }, [Todos]);

    function handelInputChange(e) {
        setTodo(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (Todo !== "") {
            setTodos([...Todos, { id: Todos.length + 1, text: Todo.trim() }]);
        }
        setTodo("");
    }
    

