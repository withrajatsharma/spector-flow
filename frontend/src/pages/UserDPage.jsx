import React from "react";

const UserDPage = () => {
  return (
    <main className="absolute top-0 left-0 bg-[#0a051d] w-full pt-24">
      <div className="w-full h-[calc(100vh-6rem)] flex">

        <div className="w-1/2"></div>

      <div className=" w-1/2  ">
      <form class="max-w-sm mx-auto pt-10">
          <label
            for="website-admin"
            class="block mb-2 text-lg font-medium text-white"
          >
            Name
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
              <svg
                class="w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-e-lg  border  block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Bonnie Green"
            />
          </div>



          
          <label for="email-address-icon" class="block mb-2 mt-8 text-sm font-medium text-white">Your Email</label>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input type="text" id="email-address-icon" class="border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@spector.com"/>
  </div>
        </form>
      </div>


        


      </div>
    </main>
  );
};

export default UserDPage;
