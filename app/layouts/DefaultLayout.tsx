import React from "react";

const DefaultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default DefaultLayout;
