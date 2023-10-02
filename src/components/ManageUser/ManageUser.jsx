import React, { useState, useEffect } from "react";
import "./ManageUser.css";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "../UserCard/UserCard";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data } from "../../helpers/Data";
import EditModal from "../modal/EditModal";
import WarningModal from "../modal/WarningModal";

const ManageUser = ({ warningModal, setwarningModal }) => {
  const [showModal, setshowModal] = useState("");
  const [userData, setuserData] = useState([]);
  const [closemodal, setCloseModal] = useState(false);
  const [userId, setuserId] = useState(null);
  const [final, setfinal] = useState(false);
  const [users, setusers] = useState({ id: "", name: "", avatar: "" });
  const [noData, setnoData] = useState(true);

  useEffect(() => {
    Data().then((data) => {
      setuserData(data);
      setnoData(false);
    });
  }, [final, closemodal]);

  return (
    <div className="manage-users">
      <div className="heading-users">
        <div className="p">
          <p>Edit Users</p>
        </div>
        <div className="fonticon">
          <FontAwesomeIcon
            size="lg"
            icon={faUserPlus}
            className="user-icon"
            onClick={() => setshowModal("add")}
          />
        </div>
      </div>
      <span></span>
      <InfiniteScroll
        height="520px"
        className="manage-infinite-scroll"
        dataLength={10}
      >
        {noData ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <SkeletonCard key={item} />)
        ) : userData.length !== 0 ? (
          userData.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              avatar={user.avatar}
              id={user.id}
              users={users}
              setuserId={setuserId}
              setusers={setusers}
              setshowModal={setshowModal}
              setwarningModal={setwarningModal}
            />
          ))
        ) : (
          <h2 className="no-user">No Users</h2>
        )}
      </InfiniteScroll>
      {warningModal && (
        <WarningModal
          setwarningModal={setwarningModal}
          warningModal={warningModal}
          userId={userId}
          setuserId={setuserId}
          final={final}
          setfinal={setfinal}
        />
      )}
      {showModal && (
        <EditModal
          users={users}
          setusers={setusers}
          showModal={showModal}
          setshowModal={setshowModal}
          setCloseModal={setCloseModal}
          closemodal={closemodal}
        />
      )}
    </div>
  );
};

export default ManageUser;
