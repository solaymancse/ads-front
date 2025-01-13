"use client";

import "../app/globals.css";

import React, { useState, useEffect } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Button from "@/components/Button";

const img_path = "/hero/7.png";
const headerHeight = 120;

export default function Hero() {
  const [height, setHeight] = useState(0); // Initialize with default values
  const [width, setWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Update height and width on mount
    const updateDimensions = () => {
      setHeight(window.innerHeight - headerHeight);
      setWidth(window.innerWidth);
    };

    // Update scroll position on scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Call the update function once to set initial values
    updateDimensions();

    // Attach event listeners
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
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
            alt="slide 2"
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
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
      <div className="absolute max-w-7xl mx-auto inset-0 flex flex-col justify-center">
        {/* Content area */}
        <div className="bg-primary1 w-fit">
          {/* Content box */}
          <div className="flex flex-col gap-3 text-white pl-10 pr-10 pt-[100px] pb-[100px]">
            {/* Content */}
            <h1 className="font-semibold">Welcome to ADS</h1>
            <h3 className="w-[390px]">Welcome to all of our students</h3>
            <div className="flex gap-3">
              <Button title="Learn More" routeTo="/our-school/who-we-are" />
              <Button title="Enroll Now" routeTo="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
