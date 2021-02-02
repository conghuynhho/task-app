import axios from "axios";

const api = "https://6019134d971d850017a409ea.mockapi.io/todolist/";

async function getTodoList() { return await axios.get(api)};
const getTodoById = (id) => axios.get(api + id);
const updateTodoList = (data, id) => axios.put(api + id, data);
const createNewTodo = (data) => axios.post(api, data);
const deleteTodo = (id) => axios.delete(api + id);




export { getTodoById, getTodoList, updateTodoList, createNewTodo, deleteTodo };
