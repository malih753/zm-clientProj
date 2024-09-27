import React, { useState } from "react";
import Button from "../../Common/Button/Button";
import { FacebookIcon, FlagIcon, GoogleIcon } from "./Icons";
import Input from "../../Common/Input/Input";
import DropDown from "../../Common/DropDown/DropwDown";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { server } from "../../Constants/server";
import toast from "react-hot-toast";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: 1234567089,
    userType: 2, // 1 for admin, 2 for user , 3 for vendor 4 for individual , 5 for corporate
    password: "",
    tanNumber: 1234456722,
    location: "dubai",
    country: "india",
    countryCode: 91,
    emailVerified: true,
    phoneNumberVerified: false,
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
    if (reEnterPassword !== formData.password) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(`${server}/users/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }finally{
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

      <form onSubmit={handleSubmit} className="lg:w-[455px] sm:w-[600px] lg:bg-transparent overflow-x-hidden lg:static absolute bg-white rounded-md left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] lg:translate-x-0 lg:translate-y-0 sm:p-4 py-4 px-[10px] w-[95%] mx-auto">
        <h1 className="text-center text-black text-[28px] font-medium mb-[5px]">
          Create your Account
        </h1>
        <p className="text-center text-[#74839C] text-lg">
          Let’s get started with your 30 days free trial
        </p>

        <div className="flex items-center  flex-wrap xs:justify-between sm:justify-center justify-center  gap-5 mt-[50px]">
          <Button btnClass="border-[#AAB3C1] border-[0.5px] py-[10px] px-[27px] bg-[#F9FBFF] flex items-center justify-center text-black text-xs font-medium gap-2 whitespace-nowrap">
            <GoogleIcon />
            Signup with Google
          </Button>
          <Button btnClass="border-[#AAB3C1] border-[0.5px] py-[10px] px-[27px] bg-[#F9FBFF] flex items-center justify-center text-black text-xs font-medium gap-2 whitespace-nowrap">
            <FacebookIcon />
            Signup with Facebook
          </Button>
        </div>

        <div className="flex items-center gap-5 justify-center text-center mt-[26px] w-full">
          <span className="bg-[#AAB3C1]  h-[0.5px] block w-full"></span>
          <p className="mr-[10px] text-xs text-black">or</p>
          <span className="bg-[#AAB3C1] h-[0.5px] block w-full"></span>
        </div>

        <div className="mt-4 mb-2 space-y-[11px]">
          <div className="space-y-[6px]">
            <label className="font-medium text-xs text-black">Full Name</label>
            <Input
              placeholder="Your Full name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
            <div className="space-y-[6px]">
            <label className="font-medium text-xs text-black">Email</label>
            <Input
              placeholder="Enter Your Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              type="email"
            />
          </div>
          <div className="space-y-[6px]">
            <label className="font-medium text-xs text-black">
              Full Mobile Number
            </label>
            <div className="flex items-center gap-[10px]">
              <DropDown
                items={["+91"]}
                FlagIcon={FlagIcon}
                selectStyles="8px"
              />
              <Input
                placeholder="Your Mobile Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                type="number"
                required
              />
            </div>
          </div>

          <div className="space-y-[6px]">
            <label className="font-medium text-xs text-black">Password</label>
            <Input
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              required
            />
          </div>
          <div className="space-y-[6px]">
            <label className="font-medium text-xs text-black">
              Re Enter Password
            </label>
            <Input
              placeholder="Re Enter Password"
              name="reEnterPassword"
              value={reEnterPassword}
              onChange={handleRenEnterPasswordChange}
              type="password"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-2 select-none mb-5">
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
            I Agree to all Terms, Privacy Policy and Fees
          </label>
        </div>

        <Button
          type="submit"
          disabled={loading}
          title={loading ? "Submitting..." : "Sign Up"}
          btnClass="w-full text-center py-[10px]"
        />
        <h6 className="mt-[10px] text-xs text-black">
          Already have an account?{" "}
          <NavLink to="/login" className="text-[#005FEA] font-medium underline">
            Login
          </NavLink>
        </h6>
      </form>

      <img
        src="/signup.jpg"
        alt=""
        className="lg:w-[602px] w-full h-[910px] md:rounded-[20px]"
      />
    </div>
  );
};

export default SignUp;
