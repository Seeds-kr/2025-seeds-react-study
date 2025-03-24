import React, { useState } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

// 할 일(Todo)의 데이터 타입 정의
interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 새로운 할 일을 추가하는 함수
  const onAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  // 완료 상태를 변경하는 함수
  const onToggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // 삭제 함수
  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id)); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 To-Do List</h1>
      <AddToDo onAdd={onAddTodo} />
      <ToDoList todos={todos} onToggleComplete={onToggleComplete} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};

export default App;
