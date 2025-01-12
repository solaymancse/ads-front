import { Fragment } from "react";
import SectionHeader from "@/components/SectionHeader";
import ResourceCard from "@/components/ResourceCard";
import Divider from "@mui/material/Divider";

const resources = [
    {
        imgSrc:  "/resources/rediker-portal-login.png",
        title: "Plus-Portal",
        description: "Plus portal is the login for all things etc. Plus portal is the login for all things etc. Plus portal is the login for all things etc. Plus portal is the login for all things etc.",
        buttonTitle: "Portal",
        buttonLink: ""
    },
    {
        imgSrc: "/resources/google-classroom-logo.png",
        title: "Google Classroom",
        description: "Google classroom is a tool used by some teachers for student's to access and submit some of their homework and access notes by the teachers etc.",
        buttonTitle: "Open",
        buttonLink: ""
    },
    {
        imgSrc:  "/resources/brightwheel-logo.jpeg",
        title: "Brightwheel App",
        description: "Brightwheel is a mobile and web-automated app for parents to maintain easy contact with teachers and how the student is doing. Teachers are able to send media and messages to classes as a whole, and individual parents.",
    },
    {
        imgSrc:  "/resources/school-supplies.png",
        title: "School Supply List",
        description: "Here you can find the full list for the suppplied needed for the 2024-2025 school year.",
        buttonTitle: "Download School List",
        buttonLink: "/schoolSupplies.pdf"
    },
];

export default function Resources() {
    return (
        <div className="w-full px-[100px] pb-[100px]">
            <div className="py-[100px]">
                <SectionHeader
                    title="STUDENT RESOURCES"
                    description="Here is where you can find all the resources related to what is used in school such as google classroom and plus portal access."
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                {resources.map((resource, index) => (
                    <Fragment key={index}>
                        <ResourceCard
                            imgSrc={resource.imgSrc}
                            title={resource.title}
                            description={resource.description}
                            buttonTitle={resource.buttonTitle}
                            buttonLink={resource.buttonLink}
                        />
                        {index < resources.length - 1 && (
                            <Divider variant="middle" 
                                sx={{
                                    width: {
                                        xs: '500px', // For extra-small screens
                                        sm: '500px', // For small screens
                                        md: '1000px', // For medium screens
                                        lg: '1000px', // For large screens and above
                                    },
                                    backgroundColor: 'gray',
                                    height: '1px',
                                    mx: 'auto', // Centers the divider horizontally
                                }}>
                            </Divider>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};