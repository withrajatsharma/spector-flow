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
          <h3 id="ill" className="text-3xl ">
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

      <div id="page2" className="h-screen bg-[#0a051d] w-full px-10">
        <div
          id="page2-1"
          className="flex justify-between h-40 items-end pb-4 text-2xl text-diffWhite "
        >
          <p>
            Welcome to FlowSpector,
            <br />
            your guide to navigating the digital world ethically.
          </p>
          {/* <p>Paris & San Diego</p> */}
        </div>

        <div id="line" className="w-full h-[1px] bg-gray-100"></div>

        <div
          id="page2-2"
          className="w-full  text-5xl leading-tight pr-24 font-medium mt-4"
        >
          <span className=" inline-block">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We empower users to
            recognize and resist deceptive
          </span>
          <span className=" inline-block">
            design practices, ensuring integrity and transparency online.{" "}
          </span>
          <span className=" inline-block">
            {" "}
            Explore our educational resources, share your experiences,{" "}
          </span>
          <span className=" inline-block">
            {" "}
            and join our community in shedding light on dark patterns.{" "}
          </span>
          <span className=" inline-block">
            {" "}
            Together, let's illuminate the digital shadows and create a{" "}
          </span>
          <span className=" inline-block">
            {" "}
            more transparent online environment.
          </span>
        </div>
      </div>


        



    </main>
  );
};

export default HomePage;
