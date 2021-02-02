import "./assets/App.css";
import TodoList from "./components/TodoList";
import {getTodoList} from './stores/data'


function App() {
  
  return (
    <div className="container">
      <div className="header">
        <h1 className="app-name">Todo List</h1>
        <p className="description">A simple React Todo List App</p>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
