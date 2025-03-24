import React from "react";
import ToDoItem from "./ToDoItem";


interface ToDoListProps {
  todos: {
    id: number;
    text: string;
    isCompleted: boolean;
  }[];
  onToggleComplete: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, onToggleComplete, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo} 
        />
      ))}
    </ul>
  );
};

export default ToDoList;
