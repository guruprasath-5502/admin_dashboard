import React from "react";
import "./UserCard.css";
import {
  faPenToSquare,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserCard = ({
  name,
  avatar,
  id,
  setshowModal,
  setwarningModal,
  setuserId,
  users,
  setusers,
}) => {
  return (
    <div className="usercard">
      <div className="card-img">
        <img src={avatar} alt="profile" />
      </div>
      <div className="card-name">
        <p>{name}</p>
      </div>
      <div className="icons-edit">
        <FontAwesomeIcon
          size="lg"
          icon={faPenToSquare}
          className="edit-icon"
          onClick={() => {
            setshowModal("edit");
            setusers({ ...users, id, name, avatar });
          }}
        />
        <FontAwesomeIcon
          size="lg"
          icon={faSquareXmark}
          className="delete-icon"
          onClick={() => {
            setuserId(id);
            setwarningModal("delete");
          }}
        />
      </div>
    </div>
  );
};

export default UserCard;
