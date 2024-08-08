import React from "react";
import Navbar from "@/components/navbar/index";

import MainFooter from "@/components/mainFooter/MainFooter";

const SurveyPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <MainFooter />
    </React.Fragment>
  );
};

export default SurveyPageLayout;
