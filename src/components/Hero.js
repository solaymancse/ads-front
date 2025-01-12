"use client";

import "../app/globals.css";

import React, { useState, useEffect } from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import Button from "@/components/Button";

const img_path = "/hero/7.png";

const headerHeight = 120;

export default function Hero() {
    const [height, setHeight] = useState(window.innerHeight - headerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newHeight = window.innerHeight - headerHeight;
            const newWidth = window.innerWidth;
            setHeight(newHeight);
            setWidth(newWidth)
        };

        const handleScroll = () => {
            const newScroll = window.scrollY;
            setScrollY(newScroll);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <div className="relative">
            <CCarousel controls indicators className="relative">
                <CCarouselItem>
                    <CImage
                        style={{
                            height: `${height}px`,
                            transform: `scale(1.5) translateY(${scrollY * 0.3}px)`, // Adjust parallax effect
                        }}
                        className="d-block w-screen object-cover"
                        src="/hero/1.jpg"
                        alt="slide 1"
                    />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage
                        style={{
                            height: `${height}px`,
                            transform: `scale(1.5) translateY(${scrollY * 0.3}px)`, // Adjust parallax effect
                        }}
                        className="d-block w-screen object-cover"
                        src="/hero/2.jpg"
                        alt="slide 1"
                    />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage
                        style={{
                            height: `${height}px`,
                            transform: `scale(1.5) translateY(${scrollY * 0.3}px)`, // Adjust parallax effect
                        }}
                        className="d-block object-cover w-full"
                        src="/hero/3.jpg"
                        alt="slide 1"
                    />
                </CCarouselItem>
            </CCarousel>
            <div className="absolute max-w-7xl mx-auto inset-0 flex flex-col justify-center"

            > {/*content area*/}
                <div className=" bg-primary1 w-fit"> {/*content box*/}
                    <div className="flex flex-col gap-3 text-white pl-10 pr-10 pt-[100px] pb-[100px]"> {/*content*/}
                        <h1 className="font-semibold">Welcome to ADS</h1>
                        <h3 className="w-[390px]">Welcome to all of our students</h3>
                        <div className="flex gap-3">
                            <Button title="Learn More" routeTo="/our-school/who-we-are"/>
                            <Button title="Enroll Now" routeTo=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};