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

  const editUser = (data) => {
    const editProps = {
      isDisplay: true,
      data: data
    };
    setEditModalProps(editProps);
  }



  // function for Modals
  const cancelEdit = () =>{
    const editProps = {
      isDisplay : false,
      data : null
    };
    setEditModalProps(editProps);
  }
  const turnOffModal = () => {
    const result = {
      isDisplay: false,
      isSuccess: true,
      content: "",
    }
    setModalProps(result);
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
      edit={editUser}
    />
  ));

  return (
    <div className="user-table-container">
      <EditModal isDisplay={editModalProps.isDisplay} data={editModalProps.data} cancel={cancelEdit} />
      <Modal isDisplay={modalProps.isDisplay} isSuccess={modalProps.isSuccess} content={modalProps.content} turnOffModal={turnOffModal}  />
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
