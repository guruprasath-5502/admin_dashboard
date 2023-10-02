import React from "react";
import "./SideMenu.css";
import WarningModal from "../modal/WarningModal";

const SideMenu = ({ modal, setmodal, warningModal, setwarningModal }) => {
  return (
    <div className="sidemenu">
      <h1>Admin Dashboard</h1>
      <p
        onClick={() => setmodal("users")}
        className={modal === "users" ? "active-heading" : "heading"}
      >
        Users
      </p>
      <p
        onClick={() => setmodal("editusers")}
        className={modal === "editusers" ? "active-heading" : "heading"}
      >
        Manage Users
      </p>
      <p onClick={() => setwarningModal("exit")} className="heading">
        Logout
      </p>
      {warningModal && (
        <WarningModal
          setwarningModal={setwarningModal}
          warningModal={warningModal}
        />
      )}
    </div>
  );
};

export default SideMenu;
