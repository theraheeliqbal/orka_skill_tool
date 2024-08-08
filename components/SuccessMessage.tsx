import React from "react";

type SuccessMessageProps = {
  success: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<number | null>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  success,
  setHide,
  setLevel,
  setSuccess,
  setCurrentIndex,
}: SuccessMessageProps) => {
  return (
    <div
      className={`flex items-center justify-center flex-col ${
        success && "py-14 sm:py-36"
      }`}
    >
      {success && (
        <div>
          <p className="text-base sm:text-3xl text-center mb-5 sm:mb-11">
            Thank You!
          </p>
          <p className="bg-green-300 p-2 rounded">
            Check your email to see the result.
          </p>
        </div>
      )}

      <button
        onClick={() => {
          setHide(false);
          setLevel(null);
          setSuccess(false);
          setCurrentIndex(0);
        }}
        className="mt-4 px-4 py-2 bg-blue-500 w-32 text-white font-bold rounded"
      >
        Test Again
      </button>
    </div>
  );
};

export default SuccessMessage;
