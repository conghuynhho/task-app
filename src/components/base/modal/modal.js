import { useEffect, useState } from "react";
import "./modal.css";

const Modal = (props) => {
  const [state, setState] = useState(props);
  // console.log(state);
  function toggleModal() {
    const result = { ...state, isDisplay: !state.isDisplay };
    props.turnOffModal();
    setState(result);
  }

  useEffect(() => {
    setState(props);
  }, [props]);

  useEffect(() => {
    const modal = document.querySelector(".modal");
    if (modal)
      modal.onclick = function (e) {
        // console.log(e.target);
        if (e.target === modal) toggleModal();
      };
  });

  if (state.isDisplay) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close-btn" onClick={toggleModal}>
            &times;
          </span>
          <p className={state.isSuccess ? "success" : "error"}>
            {state.content}
          </p>
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
