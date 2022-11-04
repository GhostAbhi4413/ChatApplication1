import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Chat application</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <k>{currentUser.displayName}</k>
      </div>
    </div>
  );
};

export default Navbar;
