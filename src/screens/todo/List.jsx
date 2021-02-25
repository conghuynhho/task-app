import TodoList from '../../components/todo/list'
import './list.css'

const ScreenTodoList = () => {
  return (

    <div className="todo-container">
      <div className="todo-header">
        <h1 className="todo-app-name">Todo List</h1>
        <p className="todo-description">A simple React Todo List App</p>
      </div>
      <TodoList />
    </div>
  );
}

export default ScreenTodoList;