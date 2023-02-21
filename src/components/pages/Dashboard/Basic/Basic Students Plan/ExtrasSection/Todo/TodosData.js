import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? "licomplete" : "li"}>
      <div>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? "textcompleted" : "text"}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <i className="fa-regular fa-trash-can" id="iconfix"></i>
      </button>
    </li>
  );
};

export default Todo;
