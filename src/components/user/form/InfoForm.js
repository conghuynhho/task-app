import "./assets/styles/radio.css";
import "./assets/styles/form.css";
import "./assets/js/radio.js";
import { createNewUser } from "../../../stores/user-info-data";
import Modal from "../../base/modal/modal";
import { useState } from "react";

export default function UserForm() {
  const [modalProps, setModalProps] = useState({});
  const create = (userInput) => {
    createNewUser(userInput).then((response) => {
      if (response.status === 201 || response.status === 200) {
        // Xu li luc thanh cong
        console.log("success");
        const isDisplay = true;
        const isSuccess = true;
        const content = response.statusText;
        const stateData = {
          isDisplay: isDisplay,
          content: content,
          isSuccess: isSuccess,
        };
        setModalProps(stateData);
      } else {
        const isDisplay = true;
        const isSuccess = false;
        const content = response.statusText;
        const stateData = {
          isDisplay: isDisplay,
          content: content,
          isSuccess: isSuccess,
        };
        setModalProps(stateData);
      }
    });
  };

  function turnOffModal (){
    const result = {
      isDisplay: false,
      isSuccess: true,
      content: "",
    }
    setModalProps(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameEle = document.getElementById("username");
    const birthdayEle = document.getElementById("birthday");
    const addressEle = document.getElementById("address");
    const genderEle = document.querySelector("input[name='gender']:checked");

    const userName = nameEle.value;
    const birthday = birthdayEle.value;
    const address = addressEle.value;
    // const gender = convertBoolean(genderEle.value);

    if (userName && birthday && address && genderEle !== null) {
      const userInput = {
        name: userName,
        birthday: birthday,
        address: address,
        gender: convertBoolean(genderEle.value),
      };
      create(userInput);
    } else {
      const message = "Please enter your infomation!";
      const stateData = {
        isDisplay: true,
        isSuccess: false,
        content: message,
      };
      setModalProps(stateData);
    }
  };
  return (
    <div>
      <Modal
        isDisplay={modalProps.isDisplay}
        content={modalProps.content}
        isSuccess={modalProps.isSuccess}
        turnOffModal={turnOffModal}
      />
      <div className="user-form-container">
        <div className="user-form">
          <h1>User Information</h1>
          <h2>Fill out this form please</h2>
          <form className="form" action="#">
            <fieldset className="form-fieldset ui-input __first">
              <input
                autoComplete="off"
                type="text"
                id="username"
                tabIndex="0"
              />
              <label htmlFor="username">
                <span data-text="Name">Name</span>
              </label>
            </fieldset>
            <fieldset className="form-fieldset ui-input __second">
              <input
                autoComplete="off"
                type="birthday"
                id="birthday"
                tabIndex="0"
              />
              <label htmlFor="birthday">
                <span data-text="Birthday">Birthday</span>
              </label>
            </fieldset>
            {/* <fieldset className="form-fieldset ui-input __third">
              <input type="password" id="gender" />
              <label htmlFor="gender">
                <span data-text="Gender">Gender</span>
              </label>
            </fieldset> */}
            <fieldset className="form-fieldset ui-input __fourth">
              <input autoComplete="off" type="text" id="address" />
              <label htmlFor="address">
                <span data-text="Address">Address</span>
              </label>
            </fieldset>
            {/* <fieldset className="form-fieldset radio-input">
              <span>Gender</span>
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">
                <span data-text="Male">Male</span>
              </label>
              <input type="radio" id="gender" name="female" value="female" />
              <label htmlFor="female">
                <span data-text="Female">Female</span>
              </label>
            </fieldset> */}
            <br />
            <br />
            <div
              className="bulgy-radios"
              role="radiogroup"
              aria-labelledby="bulgy-radios-label"
            >
              <span id="bulgy-radios-label">GENDER</span>
              <label>
                <input type="radio" id="male" value={true} name="gender" />
                <span className="radio"></span>
                <span className="label">Male</span>
              </label>
              <label>
                <input type="radio" id="female" value={false} name="gender" />
                <span className="radio"></span>
                <span className="label">Female</span>
              </label>
            </div>
            <div className="form-footer">
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function convertBoolean(string) {
  const trueString = "true";
  const falseString = "false";
  if (string === trueString) return true;
  if (string === falseString) return false;
  return false;
}
