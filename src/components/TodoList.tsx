import React, { useState } from "react";
import Todo from "../models/Todo";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      task: "fold clothes",
      completed: false,
    },
    {
      task: "put clothes in dresser",
      completed: true,
    },
    {
      task: "relax",
      completed: false,
    },
  ]);

  const deleteItem = (index: number): void => {
    setTodos((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addItem = (todo: Todo): void => {
    setTodos((prev) => [todo, ...prev]);
  };

  return (
    <div className="TodoList">
      <h1>To-Do List</h1>
      <h5>A place to store your todos</h5>
      <ol>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} deleteItem={() => deleteItem(index)} />
        ))}
      </ol>
      <TodoForm onSave={addItem} />
    </div>
  );
};

export default TodoList;
