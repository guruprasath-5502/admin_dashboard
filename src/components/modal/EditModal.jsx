import React, { useState } from "react";
import "./EditModal.css";
import { Add, Update } from "../../helpers/Data";
import CloseModal from "./CloseModal";

const EditModal = ({
  showModal,
  setshowModal,
  setCloseModal,
  closemodal,
  users,
  setusers,
}) => {
  const [formData, setformData] = useState({
    name: "",
    avatar: "",
  });

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const result = await Add(formData);
    console.log(result);
    setformData({ name: "", avatar: "" });
    setCloseModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const result = await Update(users);
    console.log(result);
    setusers({ id: "", name: "", avatar: "" });
    setCloseModal(true);
  };

  const handleChangeAdd = (e) => {
    setformData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleChangeEdit = (e) => {
    setusers((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      {closemodal ? (
        <CloseModal
          setCloseModal={setCloseModal}
          type={showModal}
          setshowModal={setshowModal}
        />
      ) : (
        <div className="editmodal">
          <div className="inner-content">
            {showModal === "add" ? <h2>Add User</h2> : <h2>Edit User</h2>}
            <form
              className="editform"
              onSubmit={
                showModal === "add" ? handleAddSubmit : handleEditSubmit
              }
            >
              <input
                type="text"
                required
                name="name"
                value={showModal === "add" ? formData.name : users.name}
                className="username"
                onChange={
                  showModal === "add" ? handleChangeAdd : handleChangeEdit
                }
                autoComplete="off"
              />
              <label className="username">UserName</label>

              <input
                required
                name="avatar"
                type="text"
                value={showModal === "add" ? formData.avatar : users.avatar}
                className="imgurl"
                onChange={
                  showModal === "add" ? handleChangeAdd : handleChangeEdit
                }
                autoComplete="off"
              />
              <label className="imgurl">Image URL</label>

              <div className="btns">
                <button className="update" type="submit">
                  {showModal === "add" ? "Add" : "Update"}
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    setshowModal("");
                    setusers({ id: "", name: "", avatar: "" });
                  }}
                  className="cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
