import React, { FormEvent, useState } from "react";
import Todo from "../models/Todo";
import "./TodoForm.css";

interface Props {
  onSave: (todo: Todo) => void;
}

const TodoForm = ({ onSave }: Props) => {
  const [task, setTask] = useState("");

  const completed = false;

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSave({ task, completed });
  };

  return (
    <form className="TodoForm">
      <label htmlFor="task">Enter a new task:</label>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default TodoForm;
