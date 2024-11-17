import React from "react";
import Sidebar from "../components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="h-full w-full p-8">{children}</div>
    </div>
  );
};

export default MainTemplate;
