import React, { useState } from "react";
import "./Header.css";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [searchName, setSearchName] = useState("");

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };
  console.log(searchName);
  return (
    <div className="header">
      <div className="search-box">
        <FontAwesomeIcon
          size="lg"
          icon={faMagnifyingGlass}
          className="font-icon"
        />
        <input type="text" value={searchName} onChange={handleChange} />
      </div>
      <div className="user-profile">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
