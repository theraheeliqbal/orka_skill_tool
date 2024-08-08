import React, { useState } from "react";
import QuestionsDetails from "@/components/QuestionsDetails";
import SocialFooter from "@/components/Socials";
import { SiTicktick } from "react-icons/si";
import EndSurvey from "./EndSurvey";

type HeroSectionProps = {
  description: string;
  imageUrl: string;
  hide: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  description,
  imageUrl,
  hide,
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center min-h-72">
      {hide ? (
        <EndSurvey />
      ) : (
        <QuestionsDetails description={description} imageUrl={imageUrl} />
      )}
    </div>
  );
};

export default HeroSection;
