import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import { FacebookIcon, GoogleIcon } from "../Sign Up/Icons";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { server } from "../../Constants/server";
import toast from "react-hot-toast";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRenEnterPasswordChange = (e) => {
    setReEnterPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    // loginUser();
    // navigate("/");
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${server}/users/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      toast.success("Login successful");
      loginUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full h-full overflow-x-hidden flex md:p-[25px] justify-between items-center">
      <img
        src="/logo.png"
        alt=""
        className="h-[25px] absolute top-[26px] left-[140px]"
      />

      <div className="lg:w-[455px] sm:w-[600px] lg:bg-transparent overflow-x-hidden lg:static absolute bg-white rounded-md left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] lg:translate-x-0 lg:translate-y-0 sm:p-4 py-4 px-[10px] w-[95%] mx-auto">
        <h1 className="text-center text-black text-[28px] font-medium mb-[5px]">
          Login to your Account
        </h1>
        <p className="text-center text-[#74839C] text-lg">
          Let’s get started with your 30 days free trial
        </p>

        <div className="flex items-center  flex-wrap xs:justify-between sm:justify-center justify-center  gap-5 mt-[50px]">
          <Button btnClass="border-[#AAB3C1] border-[0.5px] py-[10px] px-[27px] bg-[#F9FBFF] flex items-center justify-center text-black text-xs font-medium gap-2 whitespace-nowrap">
            <GoogleIcon />
            Login with Google
          </Button>
          <Button btnClass="border-[#AAB3C1] border-[0.5px] py-[10px] px-[27px] bg-[#F9FBFF] flex items-center justify-center text-black text-xs font-medium gap-2 whitespace-nowrap">
            <FacebookIcon />
            Login with Facebook
          </Button>
        </div>

        <div className="flex items-center gap-5 justify-center text-center mt-[26px] w-full">
          <span className="bg-[#AAB3C1]  h-[0.5px] block w-full"></span>
          <p className="mr-[10px] text-xs text-black">or</p>
          <span className="bg-[#AAB3C1] h-[0.5px] block w-full"></span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-4 mb-2 space-y-[11px]">
            <div className="space-y-[6px]">
              <label className="font-medium text-xs text-black">Email ID</label>
              <Input
                placeholder="Your Email ID"
                onChange={handleChange}
                name="emailId"
                value={formData.emailId}
                required
              />
            </div>

            <div className="space-y-[6px]">
              <label className="font-medium text-xs text-black">Password</label>
              <Input
                placeholder="Enter Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                required
                type="password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 select-none mb-5">
            <div className="flex items-center gap-2">
              <input
                required
                type="checkbox"
                id={"acceptTerms"}
                value=""
                className=" cursor-pointer accent-[#005FEA]"
              />
              <label
                htmlFor={"acceptTerms"}
                className="text-[#7D899F] text-xs font-medium select-none cursor-pointer "
              >
                Keep me logged in
              </label>
            </div>
            <h5 className="text-dark-blue text-xs">Forgot Password?</h5>
          </div>

          <Button
            type="submit"
            disabled={loading}
            title={loading ? "Submitting..." : "Sign In"}
            btnClass="w-full text-center py-[10px]"
          />
        </form>
        <h6 className="mt-[10px] text-xs text-black">
          Don’t have an account?{" "}
          <NavLink
            to="/sign-up"
            className="text-[#005FEA] font-medium underline"
          >
            Signup
          </NavLink>
        </h6>
      </div>

      <img
        src="/signup.jpg"
        alt=""
        className="lg:w-[602px] w-full h-[910px] md:rounded-[20px]"
      />
    </div>
  );
};

export default Login;
