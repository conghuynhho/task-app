import "./styles.css";
// import { TransitionGroup } from "react-transition-group";
// import {createNewTodo} from '../stores/data'
const NewTodoItem = ({ create }) => {
  const handleCreateNew = (e) => {
    e.preventDefault();
    let userInput = e.target.previousSibling.value;
    if (userInput !== "") {
      create(userInput);
      e.target.previousSibling.value = "";
    }
  };

  return (
    <div className="new-todo-group">
      <div className="title">New todo</div>
      <div className="input-group">
        <input type="text" placeholder="New Todo" />
        <a href="/#" className="add-btn" onClick={handleCreateNew}>
          Add Todo
        </a>
      </div>
    </div>
  );
};
export default NewTodoItem;
