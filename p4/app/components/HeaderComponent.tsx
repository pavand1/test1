import React from "react";
import Navbar from "./Navbar";

const HeaderComponent = () => {
  return (
    <header className="bg-gray-800 text-white p-2 flex items-center justify-between sticky top-0 z-10">
      <div className="my-2">HeaderComponent</div>
      <Navbar />
    </header>
  );
};

export default HeaderComponent;
