import React from "react";

const Button = (props) => {
  return (
    <div
      val={props.children}
      className={` bg-white w-fit px-[25px] py-[5.5px] text-[15px] rounded-full relative after:content-[attr(val)] after:absolute after:-bottom-5 after:left-1/2 after:-translate-x-1/2 hover:after:bottom-[4.5px] before:top-[5.5px]  hover:before:-top-5 after:duration-200 overflow-hidden before:text-nowrap after:text-nowrap before:content-[attr(val)] before:absolute before:left-1/2 before:-translate-x-1/2 before:text-black before:duration-200 text-transparent after:text-black cursor-pointer`}
    >
      {props.children}

    </div>
  );
};

export default Button;

