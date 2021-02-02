import "../assets/TodoList.css";
import TodoItem from './TodoItem'
import NewTodoItem from './NewTodoItem'
import {v4 as uuid} from 'uuid'
import React, {useState} from 'react'
import {getTodoById,getTodoList,deleteTodo,updateTodoList,createNewTodo} from '../stores/data'




const TodoList = () => {
  const [todos,setTodos] = useState(()=>([
    {id: uuid(), content: "Do home Work", isCompleted: false},
    {id: uuid(), content: "Go shopping" , isCompleted: true}
  ]));

  const removeTodo = id =>{
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const createNewTodo = (userInput)=>{
    const newTodo = {id: uuid(), content: userInput, isCompleted: false};
    const updatedTodos = [...todos,newTodo];
    console.log(updatedTodos);
    setTodos(updatedTodos)
  }

  const updateTodo = (userInput, id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo, content: userInput};
      }
      return todo;
    })
    setTodos(updatedTodos);
  }
  
  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo,isCompleted: !todo.isCompleted};
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const List = todos.map((todo, index)=>(
    <TodoItem todo={todo} key={todo.id} index={index} remove={removeTodo} update={updateTodo} toggleComplete={toggleComplete} />
  ))

  
  
  return (
    <div className="content">
      <div className="todo-list">
        {List}
      </div>
      <NewTodoItem create={createNewTodo}/>
    </div>
  );
};

export default TodoList;
