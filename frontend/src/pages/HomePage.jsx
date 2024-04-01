import React from "react";
import motionGif from "../assets/motiongif.gif";
import Pattern from "../components/Pattern.jsx";
import Button from "../components/Button.jsx"
import {Link, useNavigate} from "react-router-dom"

const HomePage = () => {

  const navigate = useNavigate();

  
  return (
    <main className=" w-full">
      <div className="bg-black opacity-40 absolute h-[125vh] w-full top-0 left-0 -z-10"></div>
      <img
        src={motionGif}
        className="w-screen h-screen -z-20 absolute top-0 left-0 object-cover"
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
        <h1 className="cursor-default select-none relative bottom-[-5rem] font-[primary] text-[15vw] ">
          <span className=" inline-block">S</span>
          <span className=" inline-block">p</span>
          <span className=" inline-block">e</span>
          <span className=" inline-block">c</span>
          <span className=" inline-block">t</span>
          <span className=" inline-block">o</span>
          <span className=" inline-block">r</span>
          
          <span className=" inline-block"> F</span>
          <span className=" inline-block"> l</span>
          <span className=" inline-block"> o</span>
          <span className=" inline-block"> w</span>

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

<section className="bg-[#0a051d]">

<Pattern />

<div onClick={()=>navigate("/darkpattern")} className="ml-10 mt-10">

   

    <Button >
      View More →
          </Button>
    
</div>

</section>


    <section className="bg-[#0a051d] pt-40">
        <h1 className="text-8xl text-center">
          About Us
        </h1>

        <p className="text-center text-2xl px-20 mt-10 pb-40">
        "Welcome to FlowSpector, where we're on a mission to illuminate the digital shadows that obscure our online experiences. In a world where deception lurks behind every click, FlowSpector stands as your beacon of transparency and empowerment. Our slogan, "Illuminate the Digital Shadows," encapsulates our commitment to shedding light on deceptive practices and empowering users to navigate the digital landscape with clarity and confidence."
        </p>


          <div className="pl-20">
            <p className="text-4xl mb-5 underline ">AIM</p>
            < p className=" text-left w-[80%] text-xl">At FlowSpector, our aim is to empower users to navigate the digital landscape with clarity, confidence, and integrity. We are dedicated to educating users about the various types of dark patterns prevalent on the internet, equipping them with the knowledge to recognize and resist deceptive design tactics. Through our platform, we seek to create awareness about the impact of dark patterns on user experience, privacy, and digital well-being. By fostering transparency through a community-driven repository of user experiences, we aim to hold digital platforms accountable for their practices. Additionally, we provide tools such as browser extensions to empower users to protect themselves against deceptive practices in real-time, enabling them to make informed and ethical decisions while browsing the web. Ultimately, FlowSpector advocates for ethical design principles, striving to promote a more transparent and trustworthy online environment for all users.</p>
          </div>

          <div className="pr-20 mt-28 pb-20">
            <p className="text-right mb-5 underline text-4xl">FUTURE SCOPE</p>
            <p className="w-[80%] ml-auto text-right text-xl">Looking ahead, FlowSpector envisions a future of expanded impact and innovation. We plan to enhance our browser extension with advanced detection algorithms, ensuring even greater accuracy in identifying and alerting users to emerging dark patterns. Our goal is to cultivate a global community where diverse voices contribute to a comprehensive repository of user experiences, fostering collaboration in combating deceptive practices worldwide. Through strategic partnerships and advocacy efforts, we aim to influence policy and promote ethical design practices across the digital landscape. Additionally, we will continue to invest in educational initiatives, data analytics, and research to empower users and businesses alike. As we explore opportunities for mobile app integration and corporate responsibility initiatives, FlowSpector remains dedicated to illuminating the digital shadows and shaping a more transparent and trustworthy online environment for all.</p>
          </div>


    </section>


    </main>
  );
};

export default HomePage;
