import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./CloseModal.css";

const CloseModal = ({
  setwarningModal,
  setfinal,
  setCloseModal,
  type,
  setshowModal,
}) => {
  return (
    <div className="close">
      <div className="close-box">
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="2xl"
          className="warn-icon-final"
        />
        {type === "warning" ? (
          <h3>Deleted Successfully !</h3>
        ) : type === "add" ? (
          <h3>Added Successfully !</h3>
        ) : (
          <h3>Updated Successfully !</h3>
        )}
        <div className="final">
          <button
            className="warncancel"
            onClick={
              type === "warning"
                ? () => {
                    setwarningModal("");
                    setfinal(false);
                  }
                : () => {
                    setCloseModal(false);
                    setshowModal("");
                  }
            }
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseModal;
