import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className={`w-full h-24 flex justify-between items-center px-10 relative z-20`}
    >
      <div className="flex gap-4 text-base ">

        <Link to={"/"}>
          <div
            className=" border-2 border-slate-700 px-5 sm:px-6 py-2 rounded-full cursor-pointer
                    relative after:absolute after:w-1/2 after:h-20 after:bg-[#ede9f0] after:-bottom-20 after:left-1/2 after:-translate-x-1/2 after:rounded-full
                    after:transition-all after:ease-linear after:duration-200 overflow-hidden 
                    hover:after:-bottom-5 hover:after:w-32 hover:text-black text-[#faf5ff]"
          >
            <p className="relative select-none z-10">home</p>{" "}
          </div>
        </Link>
        <Link to={"/extension"}>
          <div
            className=" border-2 border-slate-700 px-5 sm:px-6 py-2 rounded-full cursor-pointer
                    relative after:absolute after:w-1/2 after:h-20 after:bg-[#ede9f0] after:-bottom-20 after:left-1/2 after:-translate-x-1/2 after:rounded-full
                    after:transition-all after:ease-linear after:duration-200 overflow-hidden 
                    hover:after:-bottom-5 hover:after:w-32 hover:text-black text-[#faf5ff]"
          >
            <p className="relative select-none z-10">Extension</p>{" "}
          </div>
        </Link>
        <Link to={"/userd"}>
          <div
            className=" border-2 border-slate-700 px-5 sm:px-6 py-2 rounded-full cursor-pointer
                    relative after:absolute after:w-1/2 after:h-20 after:bg-[#ede9f0] after:-bottom-20 after:left-1/2 after:-translate-x-1/2 after:rounded-full
                    after:transition-all after:ease-linear after:duration-200 overflow-hidden 
                    hover:after:-bottom-5 hover:after:w-32 hover:text-black text-[#faf5ff]"
          >
            <p className="relative select-none z-10">Diaries</p>{" "}
          </div>
        </Link>
        <Link to={"/darkpattern"}>
          <div
            className=" border-2 border-slate-700 px-5 sm:px-6 py-2 rounded-full cursor-pointer
                    relative after:absolute after:w-1/2 after:h-20 after:bg-[#ede9f0] after:-bottom-20 after:left-1/2 after:-translate-x-1/2 after:rounded-full
                    after:transition-all after:ease-linear after:duration-200 overflow-hidden 
                    hover:after:-bottom-5 hover:after:w-40 hover:text-black text-[#faf5ff]"
          >
            <p className="relative select-none z-10">Dark Pattern</p>{" "}
          </div>
        </Link>
        
      </div>

      {/* <Link to={"/login"}>
      <Button >
        Login
      </Button>

         </Link> */}
    </nav>
  );
};

export default NavBar;
