import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-white">
      <div className="h-full grid">
        <div className="w-[100%] lg:w-[30%] xl:w-[30%] h-full justify-self-center bg-white border-x-[1px] border-gray-100 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
