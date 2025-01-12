"use client";

import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";

/* check if subtabs is empty, if it is, make sure isOpen is always false*/
export default function NavTab({ label, routeTo, subTabs }) {
    const router = useRouter();
    const [ isOpen, setIsOpen ] = useState(false);

    React.useEffect(() => {
        if (subTabs.length === 0) {
            setIsOpen(false);
        }
    }, [subTabs]);

    const handleMouseEnter = (event) => {
        console.log(label)
        setIsOpen(true);
    };

    const handleMouseLeave = (event) => {
        console.log("mouse left the dropdown")
        setIsOpen(false);
    };

    return (
        <div className="relative h-full">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex justify-center items-center h-full"
            >
                <button 
                    className="h-full shadow-[0px_10px_30px_rgba(82,63,105,0.05)] text-white px-[25px] border-none cursor-pointer"
                    onClick={() => { router.push(routeTo) }}
                >
                    {label}
                </button>
                {isOpen && 
                    <div className="absolute top-full left-0 mt-0 w-auto min-w-[200px] z-50">
                        <Dropdown items={subTabs}/>
                    </div>
                }
            </div>
        </div>
    );
};