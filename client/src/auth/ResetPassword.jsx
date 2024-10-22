import React, { useEffect }  from "react";
import HRlog from "../assets/Frame 1000003286.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetpassSchema } from "../lib/Validation";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const ResetPassword = () => {
  const navigate = useNavigate()
  const {resetToken} = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(resetpassSchema),
      });
      useEffect(() => {
        document.title = "Reset Password";
      });
      async function onSubmit(data) {
        try {
          const req = await fetch(`http://localhost:3434/api/auth/resetpassword/${resetToken}`, {
            method : "PUT",
            headers : {
              "Content-type": "application/json"
            }, 
            body : JSON.stringify(data)
          })
          const res = await req.json()
          if (!res.success){
            toast.error(res.message)
          }
          if (res.success){
            toast.success(res.message);
            navigate("/auth/signin")
          }
          console.log(res);
          
        } catch (error) {
          
        }
      }
  return (
    <>
      <main className="sign-in d-flex justify-content-center align-items-center ">
        <div className="sign-in-body p-5 ">
          <div className="d-flex justify-content-center sign-in-header">
            <img src={HRlog} alt="hr-img" className="hr-img" />
            <h1>HR Manager</h1>
          </div>
          <p>We have sent a password recovery instructions to your Email.</p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <label htmlFor="">Password</label>
              <input type="password" name="" className="sign-in-input" {...register("password")} />
              <p className="text-danger">{errors.password?.message}</p>
              <label htmlFor=""> Confirm Password</label>
              <input type="password" name="" className="sign-in-input" {...register("confirmPassword")} />
              <p className="text-danger">{errors.confirmPassword?.message}</p>
            </div>

            <button className="sign-in-btn">Reset Password</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
