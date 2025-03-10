import './App.css';
import React, { useState } from 'react';
import Template from "./components/Template"
import TodoList from "./components/TodoList"
import TodoInsert from "./components/TodoInsert"

let nextId = 1;

const App = () => {
  const [todos, setTodos]= useState([
    /*
    {
      id: 1,
      text: 'study',
      checked: true
    },
    {
      id: 2,
      text: 'mathmatics',
      checked: false
    },
    {
      id: 3,
      text: 'science',
      checked: true
    },
    */
  ]);

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력하세요.');
    } else if (todos.some(todo => todo.text === text)) {
      return alert("이미 존재하는 할 일입니다.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos.map((todo) => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    )
  }

  const deleteTodo = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo);
  }

  return (
    <Template todoLength={todos.length}>
      <TodoInsert onInsertTodo={onInsertTodo}/>
      <TodoList 
      todos={todos} 
      onCheckToggle={onCheckToggle}
      deleteTodo={deleteTodo}
      />
    </Template>
  );
};

export default App;
