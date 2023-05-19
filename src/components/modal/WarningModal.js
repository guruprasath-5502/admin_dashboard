import React from "react";
import "./WarningModal.css";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import CloseModal from "./CloseModal";
import { Delete } from "../../helpers/Data";

const WarningModal = ({
  warningModal,
  setwarningModal,
  userId,
  setuserId,
  final,
  setfinal,
}) => {
  const handleDelete = async (id) => {
    const deleted = await Delete(id);
    console.log(deleted);
    return setfinal(true);
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <>
      {final ? (
        <CloseModal
          setwarningModal={setwarningModal}
          setfinal={setfinal}
          type={"warning"}
        />
      ) : (
        <div className="warning">
          <div className="warning-box">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size="2xl"
              className="warn-icon"
            />
            <h3>Are you sure ?</h3>
            {warningModal === "delete" ? (
              <p>You won't be able to revert this !</p>
            ) : (
              <p>You want to logout ?</p>
            )}
            <div className="warning-btns">
              <button
                className="warn-del"
                onClick={
                  warningModal === "delete"
                    ? () => handleDelete(userId)
                    : logout
                }
              >
                {warningModal === "delete" ? "Delete" : "Logout"}
              </button>
              <button
                className="warn-cancel"
                onClick={() => {
                  setwarningModal("");
                  setuserId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WarningModal;
