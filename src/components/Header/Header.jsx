import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-10/12 flex justify-between mt-4">
        <div className="font-bold">DOMAINFINDER</div>
        <div className="flex gap-7">
          <a href="/">About us</a>
          <a href="/">For developers</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
