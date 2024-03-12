import React from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Gsap = () => {
    



    useGSAP(() => {

        gsap.from("#page1-cont h1 span", {
            y: 100,
            opacity: 0,
            duration: 0.3,
            stagger: 0.08,
            delay: .4,
          });
        gsap.from("#ill", {
            x: -120,
            opacity: 0,
            duration: 0.8,
            delay: .4,
          });

gsap.from("#page2 p", {
    y: 300,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers: true,
      start: "10% 70%",
  end: "10% 70%",
      scrub: 2,
    },
  });
  
  gsap.from("#page2 #line", {
    width: "0px",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2-1",
      scroller: "body",
      start: "50% 60%",
      end: "10% 40%",
      // markers: true,
      scrub: 2,
    },
  });
  
  gsap.from("#page2-2 span", {
    y: 200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2-1",
      scroller: "body",
      start: "0% 40%",
      end: "0% 0%",
      scrub: 2,
      // markers:true
    },
  });



        
       
      
      });


}

export default Gsap