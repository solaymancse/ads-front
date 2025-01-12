"use client";

import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion, AnimatePresence } from 'framer-motion';

const navTabs = [
    { 
        label: "Our School", 
        routeTo: "/who-we-are",
        subTabs: [
            {label: "Who We Are", routeTo: "/our-school/who-we-are"}, 
            {label: "Our Team",  routeTo: "/our-school/our-team"}, 
            {label: "Careers",  routeTo: "/our-school/careers"},
        ]
    },

    { 
        label: "Academics", 
        routeTo: "/curriculum",
        subTabs: [
            {label: "Curriculum", routeTo: "/academics/curriculum"}, 
            {label: "Extracurriculars",  routeTo: "/academics/extracurriculars"}, 
        ]
    },

    { 
        label: "Admissions", 
        routeTo: "/home",
        subTabs: [
            {label: "Early Childhood Center", routeTo: "/campuses/early-childhood-center"}, 
            {label: "ADS North",  routeTo: "/campuses/ads-north"}, 
            {label: "ADS West",  routeTo: "/campuses/ads-west"},
        ]
    },

    { 
        label: "Students", 
        routeTo: "/resources",
        subTabs: [
            {label: "Plus Portal", routeTo: "https://www.google.com/"}, 
            {label: "Resources",  routeTo: "/students/resources"}, 
        ]
    },

    { 
        label: "Parents", 
        routeTo: "/faq",
        subTabs: [
            {label: "Plus Portal", routeTo: "https://www.google.com/"},
            {label: "Resources", routeTo: "/parents/resources"},
            {label: "Parent Association", routeTo: "/parents/parent-association"},
            {label: "School Handbook", routeTo: "/parents/school-handbook"},
            {label: "Calendar",  routeTo: "/parents/calendar"}, 
            {label: "FAQ", routeTo: "/parents/faq"},
        ]
    },

    { 
        label: "News & Events", 
        routeTo: "/news-and-events",
        subTabs: []
    },

    { 
        label: "Contact Us", 
        routeTo: "/contact-us",
        subTabs: []
    },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openTab, setOpenTab] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTabClick = (index) => {
    setOpenTab(openTab === index ? null : index);
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
        <div onClick={toggleMenu} style={{ cursor: 'pointer', width: '30px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <motion.div
                style={{ width: '100%', height: '4px', backgroundColor: '#333' }}
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div
                style={{ width: '100%', height: '4px', backgroundColor: '#333' }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div
                style={{ width: '100%', height: '4px', backgroundColor: '#333' }}
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </div>
        {isOpen && (
            <AnimatePresence>
                <div className="overflow-hidden">
                <motion.div 
                    className="outline -z-5 w-full h-screen bg-white"
                    style={{
                        position: "absolute",
                        top: 76, left: 0
                    }}
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}

                >
                    {navTabs.map((navTab, index) => (
                        <div key={index}>
                            {navTab.subTabs.length !== 0 ? (
                                <Accordion className="shadow-none" disableGutters>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls={`panel${index}-content`}
                                        id={`panel${index}-header`}
                                        className="flex justify-between items-center py-4"
                                    >
                                        <div className="font-semibold text-lg">{navTab.label}</div>
                                    </AccordionSummary>
                                    <AccordionDetails className="flex flex-col px-4 gap-4">
                                        {navTab.subTabs.map((subTab, subIndex) => (
                                            <div key={subIndex} className="flex gap-5 text-sm text-gray-700">
                                                <a 
                                                    href={subTab.routeTo}
                                                    className="no-underline text-gray-700"
                                                >
                                                    {subTab.label}
                                                </a>
                                            </div>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ) : (
                                <a href={navTab.routeTo} className="px-3 no-underline text-gray-700">{navTab.label}</a>         
                            )}
                        </div>
                    ))}
                </motion.div>
                </div>
            </AnimatePresence>
        )}
    </div>
  );
};
