import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/features/todo/todoSlice";

const TodoList = () => {
  const [value, setValue] = useState("");
  const todos =  useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if(!value.trim()) return;
    dispatch(addTodo(value))
    setValue("")
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  };
  const handleToggle = (id) => {
    dispatch(toggleTodo(id))
  };
  return (
    <div>
      TodoList
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <ol>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
              }}
            >
              {" "}
              {todo.text}
              <button onClick={() => handleToggle(todo.id)} > {todo.complete ? "Mark Incomplete" : "Mark Complete"} </button>
              <button onClick={() => handleDelete(todo.id)} > Delete </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
