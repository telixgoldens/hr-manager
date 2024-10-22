import React, { useEffect, useState } from "react";
import HRimg from "../assets/Frame 1000003286.svg";
import "../styles/SignIn.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../lib/Validation";
import toast from 'react-hot-toast'

const SignIn = () => {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  useEffect(() => {
    document.title = "Sign In";
  });
  async function handleSignIn(data) {
    setIsClicked(true)
    try {
      const req = await fetch("http://localhost:3434/api/auth/signin",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
      })
      const res = await req.json();
      console.log(res);
      if(!res.success){
        toast.error(res.errMsg)
      }
      if(res.success){
        toast.success(res.message)
        localStorage.setItem("hr-token",res.user.token)
        if(res.user.role === "super-admin" || res.user.role === "admin"){
          navigate("/admin-dashboard")
          // window.location.reload()

        }else{
          navigate("/employee-dashboard")
        }
      }
    } catch (error) {
      
    }finally{
      setIsClicked(false)
    }
  }
  const btnText = isClicked ? "loading" : "Sign In"
  return (
    <>
      <main className="sign-in d-flex justify-content-center align-items-center ">
        <div className="sign-in-body p-lg-5 ">
          <div className="d-flex justify-content-center sign-in-header">
            <img src={HRimg} alt="hr-img" className="hr-img" />
            <h1>HR Manager</h1>
          </div>
          <h2 className="text-center sign-in-hr">
            Welcome to HR Manager - Where Creativity Meets Opportunity!
          </h2>
          <form className="" onSubmit={handleSubmit(handleSignIn)}>
            <div className="d-flex flex-column">
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="sign-in-input"
                  {...register("email")}
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div className="d-flex justify-content-between">
                <label htmlFor="">Password</label>
                
                  <Link
                    className="text-decoration-none"
                    to={"/auth/forgetpassword"}
                    id="fgt-pswd"
                  >
                    Forget Password?
                  </Link>
                
              </div>
              <div>
                <input
                  type="password"
                  name=""
                  className="sign-in-input"
                  {...register("password")}
                />
                <p className="text-danger">{errors.password?.message}</p>
              </div>
            </div>

            <button className="sign-in-btn" disabled={isSubmitting}>{btnText}</button>
          </form>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default SignIn;
