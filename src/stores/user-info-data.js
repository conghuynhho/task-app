import axios from "axios";

const apiLink = "https://601a27fc7db5390017834d19.mockapi.io/user-infomation/";

async function getUserList() {
  return await axios.get(apiLink);
}
async function updateUserList(data, id) {
  return await axios.put(apiLink + id, data);
}
async function createNewUser(data) {
  return await axios.post(apiLink, data);
}
async function deleteUser(id){
  return await axios.delete(apiLink + id);
}

export {getUserList, updateUserList, createNewUser, deleteUser};


