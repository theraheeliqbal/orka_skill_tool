import React from "react";
import { SiTicktick } from "react-icons/si";

const EndSurvey = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <SiTicktick className="text-white text-[100px] " />{" "}
      <p className="text-white text-3xl">Survey Ended!</p>
    </div>
  );
};

export default EndSurvey;
