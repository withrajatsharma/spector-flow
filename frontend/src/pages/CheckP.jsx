import React, { useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";

const UserDPage = () => {

  const imageFile = useRef();
  const [image,setImage] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  const [websiteName,setWebsiteName] = useState("")

  const handleFileChange = (e) =>{
      const img = e.target.files[0];
      setImage(img);
    }
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
        if(image==null){
          toast.error("please provide a image")
          return;

        }

      // console.log(isLoading);
      const formData = new FormData();
      
      formData.append("website",websiteName)
      formData.append("image",image)
      
      
      imageFile.current.value = null;
      setImage(null)
      setWebsiteName("")
      
      try {

        if(isLoading) {
          toast.loading("checking with AI")
        }
        
        const response = await axios.post("http://localhost:4000/api/user/geminires",formData,{
          headers:{
            "Content-Type":"multipart/form-data"
          }
          
        })
        // console.log(response.data);
       
      
          
          if(response.data.success){
            toast.dismiss();
            

             


            // toast.success(response.data.message)

            toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full  bg-[#394150] shadow-lg rounded-lg pointer-events-auto flex `}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="mx-5 flex-1">
                    <p className=" text-lg font-medium text-gray-300">
                      {response.data.message}
                    </p>
                   
                  </div>
                </div>
              </div>
              <div
              onClick={()=> toast.dismiss()}
              className="flex border-l border-gray-400">
                <button
                  
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-lg font-medium mx-2  focus:outline-none text-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          ),{
            duration:20000,
            position: 'top-center',

          })


          try {
            const delRes = await axios.post("http://localhost:4000/api/user/delete",{
              public_id: response.data.public_id
            })
            // console.log(delRes.data);
          } catch (error) {
            console.log(`error occured while deleting`);
          }
            


            // console.log(response.data.message);
            
          
          }
          else{

            setIsLoading(false)
            // toast.dismiss();
            toast.error("error in checking")
            

          }

        

        
          // toast.success(response.data.message)


          


          




        
        
      } catch (error) {
        console.log(`error: ${error}`);
        
      }

  };



     


  return (
    <main className="absolute top-0 left-0 bg-[#0a051d] w-full pt-24">
      <div className="w-full h-[calc(100vh-6rem)] flex items-center">

        <div className="w-1/2">
          
        <div class="absolute w-[30%] h-[60%] animate-updown blur-lg top-40 lg:animate-updownlg  rounded-full -right-10 sm:-right-28 md:right-[60%] bg-gradient-to-tr from-[#675bc6] to-[#01041e]"></div>

        

        </div>

      <div className=" w-1/2  ">
      <form
      onSubmit={handleSubmit}
      class="max-w-sm mx-auto -mt-20">
          <label
            for="website-admin"
            class="block mb-2 text-lg font-medium text-white"
          >
            Website Name
          </label>
          <div class="flex">
            
            <input
            autocomplete="off"
            value={websiteName}
            onChange={(e)=>setWebsiteName(e.target.value)}
              name="website"
              type="text"
              id="website-admin"
              class=" rounded-lg pl-4 border mb-10  block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Amazon"
            />
          </div>


          

         
  <label for="file-input" className="block text-lg font-medium text-white">Choose file</label>
  <input
  autocomplete="off"
  onChange={handleFileChange}
  ref={imageFile} 
  // value={image}
  // accept=".png"
  type="file" name="file" id="file-input" class="block w-full border mt-2 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-600
 file:border-0
    file:me-4
    file:py-3 file:px-4
    file:bg-gray-700 file:text-gray-400"/>




      <div className="flex items-center  justify-between mt-10">
  <button type="submit" class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
  <p className=" text-slate-300">or</p>
  <Link to={"/userd"}  class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 focus:ring-purple-800">give feedback</Link>

      </div>




        </form>
      </div>


     

      </div>
    </main>
  );
};

export default UserDPage;
