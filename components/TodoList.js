import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheckToggle, deleteTodo }) => {

    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoItem 
                todo={todo} 
                key={todo.id} 
                onCheckToggle={onCheckToggle}
                deleteTodo={deleteTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;