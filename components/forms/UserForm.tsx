"use client";
import React, { useState, ChangeEvent } from "react";
import InputField from "@/components/shared/InputField";
import { CountryType, UserFormDataProps, UserFormProps } from "@/types/types";

const UserForm = ({
  level,
  setSuccess,
  setLevel,
  success,
  surveyAnswers,
}: UserFormProps) => {
  const [sending, setSending] = useState<boolean>(false);

  const [formData, setFormData] = useState<UserFormDataProps>({
    email: "",
    level: level,
    surveyAnswers: surveyAnswers,
  });

  //  Handles changes to form inputs by updating the state with the new input values except country
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles changes to add update selected country
  const setCountry = (country: CountryType) => {
    setFormData((prev: any) => {
      return {
        ...formData,
        country: country.label,
      };
    });
  };

  // Checks email validity
  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Makes sure all keys of formData have their respective values
  const isFormValid = (): boolean => {
    return isEmailValid(formData.email);
  };

  // Submit form to create a user and sends the result
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

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
        email: "",
        level: "",
        surveyAnswers: [],
      });
      setLevel(null);
      setSuccess(true);
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
        <p className="text-xs text-red-500">Email is required</p>
        <form onSubmit={handleSubmit} className="space-y-3">
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
