import React, { ReactNode } from "react";
import Navbar from "./navbar";

const WrapLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default WrapLayout;
