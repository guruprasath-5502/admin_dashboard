import React, { useState } from "react";
import "./Users.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import { Data } from "../../helpers/Data";

const UserCards = ({ name, imgUrl }) => {
  return (
    <div className="usercards">
      <div className="cards-img">
        <img src={imgUrl} alt="profile" />
      </div>
      <div className="cards-name">
        <p>{name}</p>
      </div>
    </div>
  );
};

const Users = () => {
  const [records, setRecords] = useState([]);
  const [setShow, setsetShow] = useState(true);

  useEffect(() => {
    Data().then((data) => {
      setRecords(data);
      setsetShow(false);
    });
  }, []);
  console.log(setShow);
  return (
    <div className="users">
      <div className="headingusers">
        <div className="allusers">
          <p>All Users</p>
        </div>
        <div className="total">
          <p>Total : {records.length}</p>
        </div>
      </div>
      <span></span>
      <InfiniteScroll
        height="520px"
        className="infinite-scroll"
        dataLength={10}
      >
        {setShow ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <SkeletonCard key={item} />)
        ) : records.length !== 0 ? (
          records.map((user, index) => (
            <UserCards key={index} name={user.name} imgUrl={user.avatar} />
          ))
        ) : (
          <h2>No Users</h2>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default Users;
