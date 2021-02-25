import { useState } from "react";
import "./styles.css";

const TodoItem = ({ todo, remove, update, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoId] = useState(todo.id);
  // console.log(todo);

  const handleToggleComplete = (e) => {
    // console.log(e);
    toggleComplete(e.target.id);
  };
  const handleToggleForm = () => {
    setIsEditing(!isEditing);
  };
  const handleRemove = () => {
    const compareString = "function";
    if (typeof remove === compareString) {
      remove(todoId);
    }
  };

  const handleUpdate = (e) => {
    const compareString = "function";
    const form = e.target.previousSibling;
    if (typeof update === compareString) {
      update(form.value, todo.id);
    }
    handleToggleForm();
  };

  if (!isEditing)
    return (
      <li className="todo-item">
        <h4
          id={todo.id}
          onClick={handleToggleComplete}
          className={todo.isCompleted ? "item-text completed" : "item-text"}
        >
          {todo.content}
        </h4>
        <div className="item-button-group">
          <button onClick={handleToggleForm}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleRemove}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    );
  else
    return (
      <li className="todo-item">
        <div className="edit-todo-form">
          <input type="text" name="" id="" defaultValue={todo.content} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      </li>
    );
};

export default TodoItem;
