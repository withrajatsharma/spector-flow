import React from "react";
import motionGif from "../assets/motiongif.gif";

const HomePage = () => {
  return (
    <main className=" w-full">
      <div className="bg-black opacity-40 absolute h-[125vh] w-full top-0 left-0 -z-10"></div>
      <img
        src={motionGif}
        className="w-full -z-20 absolute -top-40 left-0"
        alt=""
      />

      <div
        id="page1-cont"
        className="text-white relative w-full h-full flex flex-col justify-between items-center"
      >
        <nav className=" w-full flex justify-between px-12 h-28 items-center">
          <h3 id="ill" className="text-2xl ">
            ILLUMINATING THE DIGITAL <br /> SHADOWS.
          </h3>
        </nav>
        <h1 className="cursor-default select-none relative bottom-[-5rem] font-[primary] text-[26vw] ">
          <span className=" inline-block">S</span>
          <span className=" inline-block">p</span>
          <span className=" inline-block">e</span>
          <span className=" inline-block">c</span>
          <span className=" inline-block">t</span>
          <span className=" inline-block">o</span>
          <span className=" inline-block">r</span>
        </h1>
      </div>


        



    </main>
  );
};

export default HomePage;
