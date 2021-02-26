import { useEffect, useState } from "react";
import "./modal.css";

const Modal = (props) => {

  console.log("render modal");
  
  // const [state, setState] = useState(props);
  // console.log(state);
  function toggleModal() {
    // const result = { ...state, isDisplay: !state.isDisplay };
    props.turnOffModal();
    // setState(result);
  }

  // useEffect(() => {
  //   setState(props);
  // }, [props]);

  useEffect(() => {
    const modal = document.querySelector(".modal");
    if (modal)
      modal.onclick = function (e) {
        // console.log(e.target);
        if (e.target === modal) toggleModal();
      };
  });

  if (props.isDisplay) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={toggleModal}>
            &times;
          </span>
          <p className={props.isSuccess ? "success" : "error"}>
            {props.content}
          </p>
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
