import NavTab from "./NavTab"

/* This data can be pulled from Sanity*/
const navTabs = [
    { 
        label: "Our School", 
        routeTo: "/our-school/who-we-are",
        subTabs: [
            {label: "Who We Are", routeTo: "/our-school/who-we-are"}, 
            {label: "Our Team",  routeTo: "/our-school/our-team"}, 
            {label: "Careers",  routeTo: "/our-school/careers"},
        ]
    },

    { 
        label: "Academics", 
        routeTo: "/academics/curriculum",
        subTabs: [
            {label: "Curriculum", routeTo: "/academics/curriculum"}, 
            {label: "Extracurriculars",  routeTo: "/academics/extracurriculars"}, 
        ]
    },

    { 
        label: "Admissions", 
        routeTo: "/",
        subTabs: [
            {label: "Early Childhood Center", routeTo: "/campuses/early-childhood-center"}, 
            {label: "ADS North",  routeTo: "/campuses/ads-north"}, 
            {label: "ADS West",  routeTo: "/campuses/ads-west"},
        ]
    },

    { 
        label: "Students", 
        routeTo: "/students/resources",
        subTabs: [
            {label: "Plus Portal", routeTo: "https://www.google.com/"}, 
            {label: "Resources",  routeTo: "/students/resources"}, 
        ]
    },

    { 
        label: "Parents", 
        routeTo: "/parents/resources",
        subTabs: [
            {label: "Calendar",  routeTo: "/parents/calendar"},
            {label: "FAQ", routeTo: "/parents/faq"},
            {label: "Parent Association", routeTo: "/parents/parent-association"},
            {label: "Resources", routeTo: "/parents/resources"}, 
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

export default function Navbar() {
    return (
        <div className="w-full hidden lg:flex bg-secondary2 text-xs lg:text-[16px] h-12 justify-center items-center xl:gap-11 text-white">
            {navTabs.map((navTab, index) => (
                <NavTab key={index} label={navTab.label} routeTo={navTab.routeTo} subTabs={navTab.subTabs}/>
            ))}
        </div>
    );
};