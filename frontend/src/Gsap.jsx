import React from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

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
       
      
      });


}

export default Gsap