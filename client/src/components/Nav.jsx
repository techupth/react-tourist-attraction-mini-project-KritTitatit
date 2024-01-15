import React from "react";
import { VscAccount } from "react-icons/vsc";

function Nav() {
  return (
    <div className="flex w-full justify-between items-center h-[80px] px-[16px] text-white absolute z-10 ">
      <div className="ml-20"></div>
      <div>
        <h1 className="text-[34px] font-bold">เที่ยวไหนดี</h1>
      </div>
      <div className="flex">
        <div className="flex items-center mx-[5px]">
          <VscAccount size={25} />
        </div>
        <p className="">Guest</p>
      </div>
    </div>
  );
}

export default Nav;
