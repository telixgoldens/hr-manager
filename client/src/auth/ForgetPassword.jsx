import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import HRlogo from "../assets/Frame 1000003286.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetpassSchema } from '../lib/Validation';
import axios from "axios";
import Loader from '../utils/Loader';
import toast from 'react-hot-toast';


const ForgetPassword = () => {
  const [isClicked, setIsClicked] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgetpassSchema),
    // defaultValues{
    //   email:""
    // }
  });
  useEffect(() => {
    document.title = "Forgot Password";
  });
  const handleForgotPwd = async (data)=>{
    setIsClicked(true)
    // try {
    //   const response = await axios.post("http://localhost:3434/api/auth/forgotpassword", data);
    //   console.log(response);
    //   if (response.status){
    //     toast.success(response.data.message)
    //   }
      
    // } catch (error) {
    //   console.log(error);
      
    // }finally{
    //   setIsClicked(false)
    // }
    
    try {
      const request = await fetch("http://localhost:3434/api/auth/forgotpassword",{
        method : "POST",
        headers : {
          "Content-type": "application/json"
        },
        body:JSON.stringify(data)
      })
      const response = await request.json();
      if (!response.success){
        toast.error(response.errMsg)
      }
      if (response.success){
        toast.success(response.message)
      }
      console.log(response);
      
      
    } catch (error) {
      
    }finally{
      setIsClicked(false)
    }
  }
  const btnText = isClicked ? <Loader/> : "Request password reset"

  return (
    <>
    
    <main className="sign-in d-flex justify-content-center align-items-center ">
        <div className="sign-in-body p-5 ">
          <div className="d-flex justify-content-center sign-in-header">
            <img src={HRlogo} alt="hr-img" className="hr-img" />
            <h1>HR Manager</h1>
          </div>
          
          <form className='' onSubmit={handleSubmit(handleForgotPwd)}>
            <div className="d-flex flex-column">
              <div>
                <label htmlFor="">Forgot password</label>
                <input type="email" name="" id="" className="sign-in-input" placeholder='Enter your email address to reset your password' {...register("email")}/>
                <p className="text-danger">{errors.email?.message}</p>
              </div>
            </div>

          <button className="sign-in-btn " disabled={isSubmitting}> {btnText}</button>
            
          </form>
        </div>
      </main>
    
    
    </>
  )
}

export default ForgetPassword