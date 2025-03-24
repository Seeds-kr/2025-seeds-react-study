import React from "react";

// 할 일 아이템의 props 타입 정의
interface ToDoItemProps {
  todo: {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  onToggleComplete: (id: number) => void;
  onDeleteTodo: (id: number) => void; 
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, onToggleComplete, onDeleteTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="custom-checkbox"
        checked={todo.isCompleted}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span className={todo.isCompleted ? "completed" : ""}>{todo.text}</span>
      <button className="delete-button" onClick={() => onDeleteTodo(todo.id)}>❌</button> 
    </li>
  );
};

export default ToDoItem;
