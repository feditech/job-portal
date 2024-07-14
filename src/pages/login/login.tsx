import React, { useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import { useDispatch } from "../../store";
import { userlist, userLogin } from "../../slices/users";
// import "./style.css";
const UserLogin = () => {
  
  return (
    // <div className=" xxl:h-screen w-full  flex items-center    pl-10  md:p-10 sm:p-4    bg-[#F7FAF8]">

    <div className=" w-full  flex items-center    ">
      {/* left */}
      <Left />
      {/* right */}
      <Right />
    </div>
  );
};

export default UserLogin;
