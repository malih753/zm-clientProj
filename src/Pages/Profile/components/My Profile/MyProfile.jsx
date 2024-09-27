import React, { useEffect, useState } from "react";
import Input from "../../../../Common/Input/Input";
import { FlagIcon } from "../../../Sign Up/Icons";
import DropDown from "../../../../Common/DropDown/DropwDown";
import Button from "../../../../Common/Button/Button";
import useSWR from "swr";
import { server } from "../../../../Constants/server";
import { fetcher } from "../../../../utils/fetcher";
import axios from "axios";
import { useAuth } from "../../../../Context/AuthContext";
import toast from "react-hot-toast";

const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [formData, setFormData] = useState({});
  const [reEnterPassword, setReEnterPassword] = useState("");
  const { data: countries } = useSWR(
    `https://restcountries.com/v3.1/all`,
    fetcher
  );

  console.log("user", user);

  const [data, setData] = useState({});

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRenEnterPasswordChange = (e) => {
    setReEnterPassword(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password && formData.password !== reEnterPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.put(
        `${server}/users/update/${user?.userId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: user?.accessToken,
          },
        }
      );
      console.log("res", res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${server}/users/details/${user?.userId}`, {
          headers: {
            Authorization: user?.accessToken,
          },
        });
        console.log("res", res);
        setFormData({ ...res.data.data, password: "" });
        setData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  console.log("formData", formData);
  const cn = countries?.map((country) => country?.name?.common);
  // console.log("countries", cn);

  return (
    <div>
      <div className="flex items-center gap-4 pb-5 border-b-[0.5px] border-b-[#AAB3C1] mb-5">
        <img
          src="/avatar.jfif"
          alt="avatar"
          className="w-[150px] h-[150px] rounded-[14px] object-cover"
        />

        <div>
          <h1 className="text-[24px] text-dark-blue font-semibold mb-1">
            {data?.name}
          </h1>
          <h2 className="font-medium text-[#74839C]">
            Joined on {new Date(data?.createdAt).toDateString()}
          </h2>
        </div>
      </div>

      <div className="mt-4 mb-2 gap-x-5 gap-y-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="space-y-[6px]">
          <label className="font-medium text-xs text-black">Full Name</label>
          <Input
            placeholder="Your Full name"
            inputClasses="font-semibold placeholder:font-medium"
            value={formData?.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="space-y-[6px]">
          <label className="font-medium text-xs text-black">Email ID</label>
          <Input
            placeholder="Your email id"
            inputClasses="font-semibold placeholder:font-medium"
            value={formData?.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="space-y-[6px]">
          <label className="font-medium text-xs text-black">
            Mobile Number
          </label>
          <div className="flex items-center gap-[10px]">
            <DropDown
              items={["+91"]}
              FlagIcon={FlagIcon}
              selectStyles="8px"
              value="+91"
            />
            <Input
              placeholder="Your Mobile Number"
              inputClasses="font-semibold placeholder:font-medium"
              value={formData?.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            />
          </div>
        </div>

        <DropDown
          items={cn}
          label="Country"
          value={formData?.country}
          onChange={handleChange}
          name="country"
        />

        <div className="space-y-[6px]">
          <label className="font-medium text-xs text-black">Password</label>
          <Input
            placeholder="Enter Password"
            inputClasses="font-semibold placeholder:font-medium"
            value={formData?.password}
            onChange={handleChange}
            name="password"
            type="password"
          />
        </div>
        <div className="space-y-[6px]">
          <label className="font-medium text-xs text-black">
            Re Enter Password
          </label>
          <Input
            placeholder="Re Enter Password"
            inputClasses="font-semibold placeholder:font-medium"
            value={reEnterPassword}
            onChange={handleRenEnterPasswordChange}
            name="reEnterPassword"
            type="password"
          />
        </div>

        <DropDown items={["-- Select --"]} label="Language" />
        <DropDown items={["-- Select --"]} label="Currency" />
      </div>

      <div className="mt-[42px] text-center">
        <Button
          btnClass="px-10 py-[7px] text-sm"
          title={loading ? "Saving..." : "Save"}
          onClick={handleUpdate}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default MyProfile;
