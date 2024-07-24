"use client";
import React, { useState, ChangeEvent } from "react";
import InputField from "@/components/shared/InputField";
import { UserFormDataProps, UserFormProps } from "@/types/types";

const UserForm = ({ level, setSuccess, setLevel, success }: UserFormProps) => {
  const [sending, setSending] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserFormDataProps>({
    username: "",
    location: "",
    email: "",
    level: level,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = (): boolean => {
    return (
      formData.username.trim() !== "" &&
      formData.location.trim() !== "" &&
      isEmailValid(formData.email)
    );
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // if (isFormValid()) {
    //   alert("Form submitted successfully!");
    // }

    // setSuccess(true);
    setSending(true);

    try {
      const POST_USER_END_POINT = "/api/users/createuser";

      const res = await fetch(POST_USER_END_POINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      setSending(false);

      setFormData({
        username: "",
        location: "",
        email: "",
        level: "",
      });
      setLevel(null);
      setSuccess(true);
      // setTimeout(() => {
      //   setSuccess(false);
      // }, 2000);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex items-center justify-center py-6 sm:py-8">
      <div>
        <p className="text-base sm:text-3xl text-center mb-5 sm:mb-11">
          Fill form to get result
        </p>
        <p className="text-xs text-red-500">All fields required</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="Enter your First Name"
            value={formData.username}
            onChange={handleChange}
            disabled={sending}
            required
          />

          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Enter your Last Name"
            value={formData.username}
            onChange={handleChange}
            disabled={sending}
            required
          />

          <InputField
            label="Location"
            name="location"
            type="text"
            placeholder="Enter your location"
            value={formData.location}
            onChange={handleChange}
            disabled={sending}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            disabled={sending}
            required
          />
          <button
            type="submit"
            className={`mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded w-full ${
              isFormValid() && !sending
                ? "hover:bg-blue-700"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isFormValid() || sending}
          >
            {!sending ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
