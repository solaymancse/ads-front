"use client";

import Aos from "aos";
import { useEffect } from "react";

const SectionHeader = ({ title, description }) => {
    useEffect(()=>{
        Aos.init();
      },[])

    return (
        <div data-aos="fade-up" className="w-full mx-auto flex justify-center items-center flex-col">
            <h1 className={`text-[#1d1d36] uppercase text-center font-semibold mb-6`}>{title}</h1>
            <small className="text-center w-[500px] font-extralight leading-7">{description}</small>
        </div>
    )
}

export default SectionHeader
