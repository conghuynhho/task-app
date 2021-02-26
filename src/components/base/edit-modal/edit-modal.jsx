// import { useEffect, useState } from "react";
import { updateUserList } from "../../../stores/user-info-data";
import _ from 'lodash';
import "./edit-modal.css";



const EditModal = ({ isDisplay, data, cancel, showNoti, setUserListState }) => {
  // const [isDisplayState, setIsDisplayState] = useState(false);
  console.log("render editmodal");
  const onSave = (e) => {
    e.preventDefault();
    //TODO: get userInput
    const editForm = document.querySelector('.edit-form');
    const editFormData = new FormData(editForm);
    const name = editFormData.get("name");
    const birthday = editFormData.get("birthday");
    const address = editFormData.get("address");
    const gender = editFormData.get("gender");
    const userInput = {
      id: data.id,
      name: name,
      birthday: birthday,
      address: address,
      gender: Number(gender)
    }
    const compareObj = {
      id: data.id,
      name: data.name,
      birthday: data.birthday,
      address: data.address,
      gender: data.gender
    }
    //TODO: PUT to the api
    if (_.isEqual(compareObj, userInput)) {
      toggleModal();
    }
    else {
      updateUserList(userInput, data.id).then((response) => {
        if (response.status === 200 || response.status === 201) {
          //TODO: solve the response
          toggleModal();
          const stateData = {
            isDisplay: true,
            isSuccess: true,
            content: "Edit successfully"
          }
          showNoti(stateData);
          setUserListState(userInput);    
        }
      })
    }


  };
  // console.log(isDisplay);
  // console.log(isDisplayState);
  // console.log("render 1 lan");
  const toggleModal = (e) => {
    if (e)
      e.preventDefault();
    cancel();
    // setIsDisplayState(!isDisplayState);
  };

  // useEffect(() => {
  //   setIsDisplayState(isDisplay);
  // }, [isDisplay]);

  function showRadioGroup(gender) {
    let result = "";
    switch (gender) {
      case 0:
        result = (
          <div className="input-group-modal">
            <div className="left-col">
              <label htmlFor="">Gender</label>
            </div>
            <div className="right-col">
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value={0}
                  defaultChecked
                />
                <span htmlFor="male">Male</span>
              </div>
              <div>
                <input type="radio" name="gender" id="female" value={1} />
                <span htmlFor="female">Female</span>
              </div>
              <div>
                <input type="radio" name="gender" id="undefined" value={2} />
                <span htmlFor="female">Không xác định</span>
              </div>
            </div>
          </div>
        );
        break;
      case 1:
        result = (
          <div className="input-group-modal">
            <div className="left-col">
              <label htmlFor="">Gender</label>
            </div>
            <div className="right-col">
              <div>
                <input type="radio" name="gender" id="male" value={0} />
                <span htmlFor="male">Male</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value={1}
                  defaultChecked
                />
                <span htmlFor="female">Female</span>
              </div>
              <div>
                <input type="radio" name="gender" id="undefined" value={2} />
                <span htmlFor="female">Không xác định</span>
              </div>
            </div>
          </div>
        );
        break;
      case 2:
        result = (
          <div className="input-group-modal">
            <div className="left-col">
              <label htmlFor="">Gender</label>
            </div>
            <div className="right-col">
              <div>
                <input type="radio" name="gender" id="male" value={0} />
                <span htmlFor="male">Male</span>
              </div>
              <div>
                <input type="radio" name="gender" id="female" value={1} />
                <span htmlFor="female">Female</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="undefined"
                  value={2}
                  defaultChecked
                />
                <span htmlFor="female">Không xác định</span>
              </div>
            </div>
          </div>
        );
        break;
      default:
        break;
    }
    return result;
  }

  if (isDisplay) {
    const gender = showRadioGroup(data.gender);

    return (
      <div className="edit-modal">
        <form action="/" className="edit-form">
          <div className="edit-modal-content">
            <h2 className="edit-title">Edit your information</h2>
            <span className="close-btn"></span>
            <div className="input-group-modal">
              <div className="left-col">
                <label htmlFor="name">Name</label>
              </div>
              <div className="right-col">
                <input type="text" name="name" defaultValue={data.name} />
              </div>
            </div>
            <div className="input-group-modal">
              <div className="left-col"><label htmlFor="birthday">Birthday</label></div>
              <div className="right-col"><input type="date" name="birthday" defaultValue={data.birthday} /></div>
            </div>
            <div className="input-group-modal">
              <div className="left-col"><label htmlFor="address">Address</label></div>
              <div className="right-col"><input type="text" name="address" defaultValue={data.address} /></div>
            </div>
            {gender}
            <div className="edit-button-group">
              <button type="button" onClick={onSave}>Save</button>
              <button type="button" onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );
  } else return null;
};

export default EditModal;
