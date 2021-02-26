import { useEffect, useState } from "react";
import { updateUserList } from "../../../stores/user-info-data";
import "./edit-modal.css";

// const DatePicker = require('react-bootstrap-date-picker')


const EditModal = ({ isDisplay, data, cancel }) => {
  const [isDisplayState, setIsDisplayState] = useState(false);
  // const [datePickerState, setDatePickerState] = useState(()=>{
  //   let value = new Date().toISOString();
  //   return {
  //     value: value
  //   }
  // })

  // const handleOnChangeDatePicker = (value, formattedValue) => {
  //   const result = {
  //     value: value,
  //     formattedValue: formattedValue
  //   }
  //   setDatePickerState(result);
  // }
  const onSave = () => {
    //TODO: get userInput
    //TODO: PUT to the api
    //TODO: solve the response

    toggleModal();
  };
  // console.log(isDisplay);
  // console.log(isDisplayState);
  // console.log("render 1 lan");
  const toggleModal = () => {
    cancel();
    setIsDisplayState(!isDisplayState);
  };

  useEffect(() => {
    setIsDisplayState(isDisplay);
  }, [isDisplay]);

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

  if (isDisplayState) {
    const gender = showRadioGroup(data.gender);

    return (
      <div className="edit-modal">
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
          {/* <DatePicker id="bootstrap-datepicker" value={datePickerState.value} onChange={handleOnChangeDatePicker} /> */}
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
