"use client"
import { useState, useEffect } from "react";
import { FaUserGraduate, FaSchool, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const Counter = ({ icon: Icon, label, endValue }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect when the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(label);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  // Counter logic
  useEffect(() => {
    if (isVisible && count < endValue) {
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount < endValue ? prevCount + 1 : endValue));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, count, endValue]);

  return (
    <div
    id={label}
    className="flex flex-col items-center justify-center p-4 relative"
  >
    <div className="absolute right-0 top-1/6 -translate-y-1/2 h-12 border-r border-slate-400"></div>
    {/* Uncomment this section if you need the icon in the future */}
    {/* 
    <Icon className="text-3xl text-[#fff] mb-4" />
    */}
    <h2 className="xl:text-5xl font-bold text-[#fff]">{count} +</h2>
    <p className="xl:text-lg font-medium text-gray-500 mt-2">{label}</p>
  </div>
  

  );
};

const Statistics = () => {
  const stats = [
    { icon: FaUserGraduate, label: "Total Students", endValue: 40 },
    { icon: FaSchool, label: "Total Campuses", endValue: 3 },
    { icon: FaUsers, label: "Total Staff", endValue: 60 },
    { icon: FaChalkboardTeacher, label: "Total Teachers", endValue: 20 },
  ];

  return (
    <div className="w-full bg-[#282D7A] mx-auto px-4 py-16">
      <div className="flex md:flex-row flex-col justify-center gap-6">
        {stats.map((stat) => (
          <Counter key={stat.label} icon={stat.icon} label={stat.label} endValue={stat.endValue} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
