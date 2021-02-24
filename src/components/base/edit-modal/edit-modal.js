import { useEffect, useState } from "react";
import {updateUserList} from '../../../stores/user-info-data'
import "./edit-modal.css";

const EditModal = ({ isDisplay, data, cancel }) => {
  const [isDisplayState, setIsDisplayState] = useState(false);

  
  const onSave = () => {
    //TODO: get userInput 
    //TODO: PUT to the api
    //TODO: solve the response
    
    
    toggleModal();  
    
  }
  // console.log(isDisplay);
  // console.log(isDisplayState);
  // console.log("render 1 lan");
  const toggleModal = () => {
    cancel(); 
    setIsDisplayState(!isDisplayState);
  }

  useEffect(()=>{
    setIsDisplayState(isDisplay)
  },[isDisplay])


  
  if (isDisplayState) {
    const gender = data.gender ? (
      <div className="input-group">
        <label htmlFor="">Gender</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value={true}
          defaultChecked
        />
        <span htmlFor="male">Male</span>
        <input type="radio" name="gender" id="female" value={false} />
        <span htmlFor="female">Female</span>
      </div>
    ) : (
      <div className="input-group">
        <label htmlFor="">Gender</label>
        <input type="radio" name="gender" id="male" value={true} />
        <span htmlFor="male">Male</span>
        <input
          type="radio"
          name="gender"
          id="female"
          value={false}
          defaultChecked
        />
        <span htmlFor="female">Female</span>
      </div>
    );


    return (
      <div className="edit-modal">
        <div className="edit-modal-content">
          <h2 className="edit-title">Edit your information</h2>
          <span className="close-btn"></span>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" defaultValue={data.name} />
          </div>
          <div className="input-group">
            <label htmlFor="birthday">Birthday</label>
            <input type="text" name="birthday" defaultValue={data.birthday} />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" defaultValue={data.address} />
          </div>
          {gender}
          <div className="edit-button-group">
            <button onClick={onSave}>Save</button>
            <button onClick={toggleModal}>Cancel</button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default EditModal;
