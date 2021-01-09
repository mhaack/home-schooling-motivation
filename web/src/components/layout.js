import React from "react";

const Layout = ({ children }) => (
  <div className="fixed overflow-hidden h-full w-full justify-center bg-blue-300">
    {children}
  </div>
);

export default Layout;
