import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-[10px] placeholder-[#69747c] focus:outline-none focus:ring-2"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-[10px] placeholder-[#69747c] focus:outline-none focus:ring-2"
      />

      <textarea
        placeholder="Message"
        rows={2}
        className="w-full px-4 py-2 border border-gray-300 rounded-[10px] placeholder-[#69747c] focus:outline-none focus:ring-2"
      />

      <button
        type="submit"
        className="!w-full !rounded-[50px] py-2 px-3  btn btn-blue text-white font-semibold transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
