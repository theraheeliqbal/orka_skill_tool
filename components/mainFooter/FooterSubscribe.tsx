"use client";
import React, { useState } from "react";

const FooterSubscribe: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="email" className="mb-2">
        Subscribe to our newsletter:
      </label>
      <input
        type="email"
        id="email"
        className="p-2 mb-4 border border-gray-300 rounded"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-white text-black hover:text-white hover:bg-black p-2 rounded hover:bg-orange-dark"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterSubscribe;
