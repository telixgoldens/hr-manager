import React, { useEffect } from "react";
import HRimg from "../assets/Frame 1000003286.svg";
import "../styles/SignIn.css";
import { Link, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../lib/Validation";

const onSubmit = (data) => console.log(data);
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  useEffect(() => {
    document.title = "Sign In";
  });
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
          <form className="" onSubmit={handleSubmit(onSubmit)}>
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

            <button className="sign-in-btn">Sign In</button>
          </form>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default SignIn;
