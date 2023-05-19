import React, { useState } from "react";
import "./HomePage.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Users from "../../components/Users/Users";
import Header from "../../components/Header/Header";
import ManageUser from "../../components/ManageUser/ManageUser";

const HomePage = () => {
  const [modal, setmodal] = useState("users");
  const [warningModal, setwarningModal] = useState("");

  return (
    <div className="home">
      <SideMenu
        setmodal={setmodal}
        modal={modal}
        warningModal={warningModal}
        setwarningModal={setwarningModal}
      />
      <div className="home-content">
        <Header />
        {modal === "users" && <Users />}
        {modal === "editusers" && (
          <ManageUser
            warningModal={warningModal}
            setwarningModal={setwarningModal}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
