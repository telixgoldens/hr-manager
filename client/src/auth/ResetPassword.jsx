import React, { useEffect }  from "react";
import HRlog from "../assets/Frame 1000003286.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetpassSchema } from "../lib/Validation";

const onSubmit = (data) => console.log(data);
const ResetPassword = () => {
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
  return (
    <>
      <main className="sign-in d-flex justify-content-center align-items-center ">
        <div className="sign-in-body p-5 ">
          <div className="d-flex justify-content-center sign-in-header">
            <img src={HRlog} alt="hr-img" className="hr-img" />
            <h1>HR Manager</h1>
          </div>
          <h2 className="text-center sign-in-hr">Check your Email</h2>
          <p>We have sent a password recovery instructions to your Email.</p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column">
              <label htmlFor="">Password</label>
              <input type="password" name="" className="sign-in-input" {...register("password")} />
              <p className="text-danger">{errors.password?.message}</p>
              <label htmlFor=""> Confirm Password</label>
              <input type="password" name="" className="sign-in-input" {...register("confirmpassword")} />
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
