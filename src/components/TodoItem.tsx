import React from "react";
import "./TodoItem.css";
import Todo from "../models/Todo";

interface Props {
  todo: Todo;
  deleteItem: () => void;
}

const TodoItem = ({ todo, deleteItem }: Props) => {
  return (
    <li className="TodoItem">
      {!todo.completed && (
        <button
          onClick={() => {
            todo.completed = true;
          }}
        >
          Complete
        </button>
      )}
      {todo.task}
      <button onClick={deleteItem}>X</button>
    </li>
  );
};

export default TodoItem;
