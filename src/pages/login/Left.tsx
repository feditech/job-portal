import { EmailOutlined, Send, VisibilityOffOutlined } from "@material-ui/icons";
import { KeyOutlined } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
//
// import { ReactComponent as FacebookIcon } from "../../assets/icons/facebookIcon.svg";
// import { ReactComponent as GoogleIcon } from "../../assets/icons/googleIcon.svg";
// import { ReactComponent as AppleIcon } from "../../assets/icons/appleIcon.svg";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useDispatch } from "../../store";
import { userLogin } from "../../slices/users";
const Left = () => {
  const navigate = useNavigate();
  const [userEmail,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
//   useEffect(()=>{
   
//   },[])
  const handlechangeEmail=(e:any)=>{
    setEmail(e.target.value)
  }
  const handlechangePassword=(e:any)=>{
setPassword(e.target.value)
  }
  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    dispatch(userLogin({
        "username": userEmail,
        "password": password
        }
        ))
  }
  return (
    <div className=" flex flex-col justify-center p-10 pr-48  my-3 border-0   text-black w-full sm:p-4 ">
      <div className="my-5  ">
        <div className="">
          <h1 className="text-3xl my-5 font-bold text-[#034158] xxl:text-[36px] ">
            Join our job portal
          </h1>
          <p className="text-md text-[#707070]  my-2">
            Job seekers apply. Employers post, search, manage.
          </p>
        </div>
      </div>
    <form onSubmit={handleSubmit}>
      <div className="xl:my-5 my-8  ">
        <TextField
          InputProps={{
            startAdornment: <EmailOutlined style={{ color: "lightgray" }} />,
          }}
          onChange={(e)=>{
            handlechangeEmail(e)
          }}
          sx={{
            outline: "none !important",
            border:"none !important",
          }}
          className="outline-none lg:text-md xl:text-lg text-[21px] border-none  border-b   p-4 w-full "
          placeholder="Email Address"
          type="text"
        />
      </div>
      <div className="xl:my-5 my-8  ">
        <TextField
          className="outline-none lg:text-md xl:text-lg text-[21px] border-b   p-4 w-full "
          placeholder="Password"
          type="text"
          onChange={(e)=>{
            handlechangePassword(e)
          }}
          InputProps={{
            startAdornment: <KeyOutlined style={{ color: 'lightgray' }} />,
            endAdornment: <VisibilityOffOutlined  style={{ color: 'lightgray' }} />
          }}
        />
        
      </div>
      <div className="flex ">
      <FormControlLabel control={<Checkbox defaultChecked />} label="Accept term and Condition" />
      <p className="text-md text-[#707070]  my-2">
            Forget Passord
          </p>
        
      </div>

      <div className="xl:my-5  my-8 mt-6">
        <button
        type="submit"
          onClick={() => {
            navigate(`/`);
            window.scrollTo(0, 0);
          }}
          className="bg-[#034158] p-3 text-white text-[21px] mt-2 rounded shadow-md   shadow-[#034158] mr-3.5"
        >
          Login
        </button>
        <Button  endIcon={<Send />}>
Register a new Account
</Button>
      </div>
      </form>
    </div>
  );
};

export default Left;
