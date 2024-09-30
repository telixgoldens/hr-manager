import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import HRlogo from "../assets/Frame 1000003286.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetpassSchema } from '../lib/Validation';

const onSubmit = (data) => console.log(data);
const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgetpassSchema),
  });
  useEffect(() => {
    document.title = "Forgot Password";
  });
  return (
    <>
    
    <main className="sign-in d-flex justify-content-center align-items-center ">
        <div className="sign-in-body p-5 ">
          <div className="d-flex justify-content-center sign-in-header">
            <img src={HRlogo} alt="hr-img" className="hr-img" />
            <h1>HR Manager</h1>
          </div>
          
          <form className='' onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <div>
                <label htmlFor="">Forgot password</label>
                <input type="email" name="" id="" className="sign-in-input" placeholder='Enter your email address to reset your password' {...register("password")}/>
                <p className="text-danger">{errors.email?.message}</p>
              </div>
            </div>

            <button className="sign-in-btn "><Link className='text-decoration-none text-white' to={"/auth/resetpassword"}>Request password reset</Link> </button>
            
          </form>
        </div>
      </main>
    
    
    </>
  )
}

export default ForgetPassword