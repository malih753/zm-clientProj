import React from "react";
import Input from "../../../../Common/Input/Input";
import { CalenderIcon, DownArrowIcon, FlagIcon } from "./Icons";
import Button from "../../../../Common/Button/Button";
import DropDown from "../../../../Common/DropDown/DropwDown";
import axios from "axios";
import { server } from "../../../../Constants/server";
import toast from "react-hot-toast";
import { useAuth } from "../../../../Context/AuthContext";

const EnquiryCard = () => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    emailVerified: "true",
    phoneNumberVerified: true,
    noOfPeople: "",
    budget: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    preferredArea: "",
    additionalRequirements: "chair , water",
    acceptsTandC: true,
  });
  const {user} = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${server}/enquiry/create`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: user?.accessToken,
        },
      });
      console.log("res", res);
      toast.success("Enquiry created successfully");
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+91",
        phoneNumber: "",
        emailVerified: "true",
        phoneNumberVerified: true,
        noOfPeople: "",
        budget: "",
        eventDate: "",
        eventTime: "",
        eventType: "",
        preferredArea: "",
        additionalRequirements: "chair , water",
        acceptsTandC: true,
      });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[321px] h-[655px]  px-[10px] py-[14px] border-[0.5px] border-[#AAB3C1] bg-[#F9FBFF] rounded-[10px]"
    >
      <h1 className="text-[#005FEA] font-bold text-lg mb-[13px]">
        Make an Enquiry
      </h1>

      <div className="space-y-[10px]">
        <Input
          required
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <Input
          required
          label="Enail ID"
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
        />

        <div className="flex items-center gap-[10px]">
          <div className="flex items-center p-2 bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] w-[72px] h-[32px] gap-[6px] hover:cursor-pointer">
            <FlagIcon />

            <p className="text-[#7D899F] text-[10px]">+971</p>
            <DownArrowIcon />
          </div>

          <Input
            required
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
          />
        </div>
        <Input
          required
          label="No of People"
          value={formData.noOfPeople}
          onChange={handleChange}
          name="noOfPeople"
        />

        <DropDown
          items={["190"]}
          value={formData.budget}
          onChange={handleChange}
          name="budget"
          required={true}
        />
        <Input
          required
          label="Location"
          value={formData.preferredArea}
          onChange={handleChange}
          name="preferredArea"
        />
        <Input
          required
          label="Event Date"
          value={formData.eventDate}
          onChange={handleChange}
          name="eventDate"
          // icon={<CalenderIcon />}
          // iconClasses="right-4"
          type="date"
          min={new Date().toISOString().split("T")[0]}
        />
        <Input
          required
          label="Event Time"
          value={formData.eventTime}
          onChange={handleChange}
          name="eventTime"
          type="time"
        />

        <DropDown
          items={["Wedding"]}
          value={formData.eventType}
          onChange={handleChange}
          name="eventType"
          required={true}
        />
      </div>

      <div className="flex items-center gap-2 select-none mt-[10px]">
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
          Accept Terms and Conditions.
        </label>
      </div>

      <div className="text-center">
        <Button
          type="submit"
          title={loading ? "Submitting..." : "Submit"}
          btnClass="py-[6px] px-10 mt-6 rounded-[6px] font-normal text-sm hover:text-[#005FEA] hover:bg-[#F9FBFF] border border-[#005FEA] duration-300"
        />
      </div>
    </form>
  );
};

export default EnquiryCard;
