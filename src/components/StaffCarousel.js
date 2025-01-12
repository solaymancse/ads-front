"use client";

import StaffCard from "@/components/StaffCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for arrows

export default function StaffCarousel({ staff }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10">
                <FaChevronLeft />
            </div>
        ),
        nextArrow: (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10">
                <FaChevronRight />
            </div>
        ),
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {staff.map((person, index) => (
                    <div key={index}>
                        <StaffCard
                            name={person.name}
                            title={person.title}
                            subject={person.subject}
                            background={person.background}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
