import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? "licomplete" : "li"}>
      <div style={{float:"left"}}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <h5
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? "textcompleted" : "text"}
        >
          {todo.text}
        </h5>
      </div>
      <div id="align-right-btn">
        <button onClick={() => deleteTodo(todo.id)} id="extras-btn">
          <i className="fa-regular fa-trash-can" id="iconfix"></i>&nbsp;Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
