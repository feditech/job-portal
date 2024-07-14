import React, { useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import { useDispatch } from "../../store";
import { userlist, userLogin } from "../../slices/users";
// import "./style.css";
const UserLogin = () => {
  
  return (

    <div className=" w-full  flex items-center    ">
      {/* left */}
      <Left />
      {/* right */}
      <Right />
    </div>
  );
};

export default UserLogin;
