import { useEffect, useState } from "react";
import {
  getUserList,
  deleteUser,
} from "../../../stores/user-info-data";
import "./userlist.css";
import UserItem from "../item/UserItem";
import Modal from "../../base/modal/modal";
import EditModal from "../../base/edit-modal/edit-modal"

export default function UserList() {
  console.log("render userlist");

  const [userList, setUserList] = useState([]);
  const [modalProps, setModalProps] = useState({});
  const [editModalProps, setEditModalProps] = useState({});
  // const [userDataList, setUserDataList] = useState(()=>[])

  // Get data form api
  useEffect(() => {
    const fetchData = async () => {
      const result = getUserList();
      setUserList((await result).data);
    };
    fetchData();
  }, []);

  console.log(userList);

  // Function for working with api
  const removeUser = (id) => {
    deleteUser(id).then((response) => {
      if (response.status === 200 || response.status === 201) {
        const stateData = {
          isDisplay: true,
          isSuccess: true,
          content: "Deleted user"
        }
        setModalProps(stateData);
        setUserList(userList.filter((user) => user.id !== id));
      } else {
        const stateData = {
          isDisplay: true,
          isSuccess: false,
          content: response.statusText
        }
        setModalProps(stateData);
      }
    });
  };

  const showEditModal = (data) => {
    const editProps = {
      isDisplay: true,
      data: data
    };
    setEditModalProps(editProps);
  }



  // function for Modals
  const cancelEdit = () => {
    const editProps = {
      isDisplay: false,
      data: null
    };
    setEditModalProps(editProps);
  }
  
  const showModal = (data) => {
    setModalProps(data);
  }
  const turnOffModal = () => {
    const result = {
      isDisplay: false,
      isSuccess: true,
      content: "",
    }
    setModalProps(result);
  }
  const setUserListStateFunc = (data) => {
    const result = userList.map((user) => {
      if(user.id === data.id) return{
        ...data
      }
      else return user;
    })
    setUserList(result)
  }


  const list = userList.map((user, index) => (
    <UserItem
      key={index}
      id={user.id}
      name={user.name}
      gender={user.gender}
      birthday={user.birthday}
      address={user.address}
      remove={removeUser}
      showEditModal={showEditModal}
    />
  ));

  return (
    <div className="user-table-container">
      {editModalProps.isDisplay ? (
        <EditModal isDisplay={editModalProps.isDisplay} data={editModalProps.data} cancel={cancelEdit} showNoti={showModal} setUserListState={setUserListStateFunc} />
      ) : (null)}
      {modalProps.isDisplay ? (
        <Modal isDisplay={modalProps.isDisplay} isSuccess={modalProps.isSuccess} content={modalProps.content} turnOffModal={turnOffModal} />
      ) : (null)}
      {/* <EditModal isDisplay={editModalProps.isDisplay} data={editModalProps.data} cancel={cancelEdit} showNoti={showModal} /> */}
      {/* <Modal isDisplay={modalProps.isDisplay} isSuccess={modalProps.isSuccess} content={modalProps.content} turnOffModal={turnOffModal} /> */}
      <table className="user-info-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}
