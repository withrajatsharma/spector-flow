import React from "react";
import logo from "../assets/logo.png";

const ExtensionPage = () => {
  return (
    <main className="bg-[#0a051d]  w-full pt-24 absolute top-0 left-0">
      <div className="w-full ">
        <div className="h-[calc(50vh-3rem)] flex items-center justify-end bg-[#675bc6] w-full">
          <div className="w-1/2 relative text-black font-bold">
            <h1 className="text-8xl tracking-wide">EXTENSION</h1>
            <p className="text-6xl">Flow Spector</p>
            <img className="absolute -left-[80%] top-0" src={logo} alt="" />
          </div>
        </div>
        <div className="h-[calc(50vh-3rem)] flex justify-end items-center pr-16 w-full">
          <div className="w-1/2 relative text-white">
            <p className="text-xl">
              Welcome to FlowSpector! Enhance your online experience and protect
              yourself from deceptive design practices with our browser
              extension. Download the extension below and enjoy real-time
              scanning and alerts as you browse the web.
            </p>
          </div>
        </div>
      </div>

      <div className=" text-black w-full bg-[#675bc6] pl-24 pt-10 pb-20 pr-20">
        <h1 className=" font-bold text-7xl ">Download Instructions</h1>

        <p className="text-2xl font-semibold pt-10">
          Click the "Download" button below to get started. <br />
          <br />
          Follow the installation prompts for your browser. <br />
          <br />
          Once installed, the FlowSpector extension will automatically scan
          websites for dark patterns, providing instant alerts to help you
          navigate the digital landscape with confidence. Compatibility
        </p>


          <button className=" bg-black px-10 py-4 rounded-lg text-white  text-4xl my-20">
            <a href="https://drive.google.com/drive/u/0/folders/1POkaoTTCkrpKeveKaMrsuxfetuWqgGcK" target="blank">
            DOWNLOAD
            </a>
          </button>



          <p className=" text-2xl text-slate-300 font-medium">
          1. FlowSpector extension is compatible with popular web browsers including Chrome, Firefox, and Edge. <br /><br />

2. Ensure you have the latest version of your browser for optimal performance. Privacy and Security <br /><br />

3. Rest assured, FlowSpector prioritizes user privacy and security. We do not collect any personal information through the extension. <br /> <br />

4. Your browsing data remains private and secure, with no tracking or monitoring of your online activities. <br /> <br />

5. Stay Informed, Stay Protected: Download the FlowSpector browser extension today and join the fight against deceptive design practices. <br /> <br />

6. Empower yourself with real-time protection and navigate the web with transparency and integrity.
          </p>



      </div>
    </main>
  );
};

export default ExtensionPage;
