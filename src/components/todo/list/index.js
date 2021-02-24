import "./styles.css";
import TodoItem from "../item";
import NewTodoItem from "../new-item";
// import { v4 as uuid } from "uuid";
import React, { useState, useEffect } from "react";
import {
  getTodoList,
  deleteTodo,
  updateTodoList,
  createNewTodo as createNewTodoApi,
} from "../../../stores/todo-data";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // remove
  const removeTodo = (id) => {
    console.log(todos);
    console.log(id);
    deleteTodo(id).then((response) => {
      if (response.status === 200)
        setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  // Create
  const createNewTodo = (userInput) => {
    const newTodo = { id: new Date().valueOf() , content: userInput, isCompleted: false };
    // const updatedTodos = [...todos, newTodo];
    createNewTodoApi(newTodo).then((response) => {
      const fetchData = async () => {
        const result = getTodoList();
        setTodos((await result).data);
      };
      fetchData();
      // if(response.status === 201) setTodos(updatedTodos);
    });
  };

  // Update
  const updateTodo = (userInput, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, content: userInput };
      return todo;
    });
    const updateTodo = { content: userInput };
    updateTodoList(updateTodo, id).then((response) => {
      if (response.status === 200) setTodos(updatedTodos);
    });
  };

  // setCompleted
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
      return todo;
    });
    const [isCompletedForApi] = updatedTodos.filter((todo) => todo.id === id);
    updateTodoList(isCompletedForApi.isCompleted, id).then((response) => {
      if (response.status === 200) setTodos(updatedTodos);
    });
  };

  const List = todos.map((todo, index) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      index={index}
      remove={removeTodo}
      update={updateTodo}
      toggleComplete={toggleComplete}
    />
  ));
  // TODO: tim hieu lam viec voi api

  useEffect(() => {
    const fetchData = async () => {
      const result = getTodoList();
      setTodos((await result).data);
    };
    fetchData();
  },[]);

  return (
    <div className="todo-content">
      <div className="todo-list">{List}</div>
      <NewTodoItem create={createNewTodo} />
    </div>
  );
};

export default TodoList;
