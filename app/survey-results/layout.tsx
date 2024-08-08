import React from "react";
import SurveyPageLayout from "../layouts/SurveyPageLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <SurveyPageLayout>{children}</SurveyPageLayout>;
};

export default layout;
