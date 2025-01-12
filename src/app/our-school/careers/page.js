import SectionHeader from "@/components/SectionHeader";
import JobListing from "@/components/JobListing";
import MultipleContentPair from "@/components/MultipleContentPair";
import { BsQuote } from "react-icons/bs";

const quotes = [
    {
        name: "Alexa Young",
        role: "Teacher",
        quote: "Testimonials provide a sense of what it's like to work with you or use your products. Change the text and add your own."
    },
    {
        name: "Alexa Young",
        role: "Teacher",
        quote: "Testimonials provide a sense of what it's like to work with you or use your products. Change the text and add your own."
    },
    {
        name: "Alexa Young",
        role: "Teacher",
        quote: "Testimonials provide a sense of what it's like to work with you or use your products. Change the text and add your own."
    },
]

const jobs = [
    {
        role: "ADS West Principal",
        description: "",
        jobLink: ""
    },
    {
        role: "School Counselor",
        description: "We are seeking a compassionate and dedicated School Counselor to join our team and support the academic, emotional, and social growth of our students. In this role, you will work closely with students to help them overcome personal challenges, manage stress, and make informed decisions about their future. You will collaborate with teachers, parents, and school administrators to foster a positive and supportive learning environment. Your responsibilities will also include providing career counseling, assisting with college preparation, and offering crisis intervention as needed. If you are passionate about making a difference in the lives of students and have a strong commitment to their well-being, we encourage you to apply.",
        jobLink: ""
    },
    {
        role: "P.E. Teacher",
        description: "",
        jobLink: ""
    },
    {
        role: "Secondary Social Studie Teacher",
        description: "",
        jobLink: ""
    },
    {
        role: "Secondary Math Teacher",
        description: "",
        jobLink: ""
    },
    {
        role: "Secondary Science",
        description: "",
        jobLink: ""
    },
    {
        role: "Secondary ELA Teacher",
        description: "",
        jobLink: ""
    },
    {
        role: "Elementary Homeroom Teacher",
        description: "",
        jobLink: ""
    },
];

export default function Careers() {
    return (
        <div>
            <div className="mt-[80px]"> 
                <SectionHeader
                    title="CAREERS"
                    description="At Al Salam Day School, we believe that our educators and staff are the heart of our community. Joining our team means becoming part of a supportive, dynamic, and innovative environment where your contributions are valued and your professional growth is nurtured."
                />

                <div className=" mt-[200px] xl:mt-[50px] pt-[100px] xl:relative ">
                    <div className="bg-[#282D79] hidden xl:block xl:absolute  xl:top-0 w-full xl:h-[800px]"></div>
                    <div className="w-full xl:relative">
                        <MultipleContentPair
                            imgLeft="/career/career.webp"
                            imgRight="/career/career1.webp"
                            height={567}
                            imageLeft={false}
                            bg="bg-[#fff]"
                            childrenLeft={<div className="text-[#1d1d36] px-16">
                                <p className="mb-4 font-medium leading-8">
                                    Commitment to Excellence</p>
                                <small className="leading-8 font-extralight mb-8">We are dedicated to providing a high-quality education that fosters academic excellence, creativity, and critical thinking. As part of our team, you will have the opportunity to inspire and shape the minds of future leaders.</small>
                            </div>}
                            childrenRight={<div className="text-[#1d1d36] px-16">
                                <p className="mb-4 font-medium leading-8">
                                    Professional Development</p>
                                <small className="leading-8 font-extralight mb-8">We are dedicated to providing a high-quality education that fosters academic excellence, creativity, and critical thinking. As part of our team, you will have the opportunity to inspire and shape the minds of future leaders.</small>
                            </div>}
                        />

                        <MultipleContentPair
                            imgLeft="/career/career1.webp"
                            imgRight="/career/career.webp"
                            height={567}
                            imageLeft={true}
                            bg="bg-[#1D1D36]"
                            childrenLeft={<div className="text-[#fff] px-16">
                                <p className="mb-4 font-medium leading-8">
                                    Collaborative Environment</p>
                                <small className="leading-8 font-extralight mb-8">At Al Salam, we believe in the power of teamwork. Our collaborative culture encourages open communication, shared ideas, and mutual support, creating a positive and productive workplace.</small>
                            </div>}
                            childrenRight={<div className="text-[#fff] px-16">
                                <p className="mb-4 font-medium leading-8">
                                    Inclusive Community</p>
                                <small className="leading-8 font-extralight mb-8">We are proud of our diverse and inclusive community. We celebrate different cultures, backgrounds, and perspectives, fostering an environment where everyone feels respected and valued.</small>
                            </div>}
                        />
                        <MultipleContentPair
                            imgLeft="/career/career1.webp"
                            imgRight="/career/career.webp"
                            height={567}
                            imageLeft={false}
                            bg="bg-[#fff]"
                            childrenLeft={<div className="text-[#1d1d36] px-16">
                                <p className="mb-4 font-medium leading-8">                              
                                    Innovative Teaching Methods
                                </p>
                                <small className="leading-8 font-extralight mb-8">We embrace a variety of teaching approaches, including the Montessori method, to cater to the diverse learning styles of our students. This allows our educators to be creative and innovative in their teaching practices.</small>
                            </div>}
                            childrenRight={<div className="text-[#1d1d36] px-16">
                                <p className="mb-4 font-medium leading-8">
                                    Supportive Leadership
                                </p>
                                <small className="leading-8 font-extralight mb-8">Our leadership team is committed to supporting our staff in every way possible. From providing resources to offering guidance, we ensure that our educators have what they need to succeed.</small>
                            </div>}
                        />
                        <MultipleContentPair
                            imgLeft="/hero/1.JPG"
                            imgRight="/hero/2.JPG"
                            height={567}
                            imageLeft={true}
                            bg="bg-[#1D1D36]"
                            childrenLeft={<div className="text-[#fff] px-16">
                                <p className="mb-4 font-medium leading-8">
                                    Work-Life Balance</p>
                                <small className="leading-8 font-extralight mb-8">We understand the importance of maintaining a healthy work-life balance. We offer flexible schedules and a supportive work environment to help our staff achieve this balance.</small>
                            </div>}
                            childrenRight={<div className="text-[#fff] px-16">
                                <p className="mb-4 font-medium leading-8">
                                    Impactful Work</p>
                                <small className="leading-8 font-extralight mb-8">Working at Al Salam means making a meaningful difference in the lives of our students. Every day, you will have the opportunity to inspire, motivate, and positively impact the next generation.</small>
                            </div>}
                        />
                    </div>


                </div>
                <div className="mt-[100px] xl:mt-[80px] border-1 border-[#000]">
                    <div className="grid lg:grid-cols-3  text-[#1D1D36] xl:h-[560px]">
                        <div className="border-b xl:border-r border-[#000] p-20 flex flex-col   ">
                            <div className="mb-12 flex justify-center ">
                                <BsQuote color="#282D79" size={100} />
                            </div>
                            <h4 className="font-semibold mb-3 text-center">
                                {quotes[0].name} - {quotes[0].role}
                            </h4>
                            <h6 className="font-light text-center leading-8">
                                "{quotes[0].quote}"
                            </h6>

                        </div>
                        <div className="border-b xl:border-r border-[#000] p-20 flex flex-col   ">
                            <div className="mb-12 flex justify-center ">
                                <BsQuote color="#282D79" size={100} />
                            </div>
                            <h4 className="font-semibold mb-3 text-center">
                                {quotes[1].name} - {quotes[1].role}
                            </h4>
                            <h6 className="font-light text-center leading-8">
                                "{quotes[1].quote}"
                            </h6>

                        </div>
                        <div className=" p-20 flex flex-col   ">
                            <div className="mb-12 flex justify-center ">
                                <BsQuote color="#282D79" size={100} />
                            </div>
                            <h4 className="font-semibold mb-3 text-center">
                                {quotes[2].name} - {quotes[2].role}
                            </h4>
                            <h6 className="font-light text-center leading-8">
                                "{quotes[2].quote}"
                            </h6>

                        </div>

                    </div>
                </div>

                <div className="bg-[#EDEBEB] ">
                    <div className="py-[100px] px-20 max-w-6xl mx-auto">
                        <h5 className="font-semibold text-black text-center">
                            Join us at Al Salam Day School and be part of a community that values education, innovation, and personal growth. Together, we can create a brighter future for our students and ourselves.
                        </h5>
                    </div>
                </div>
                <div className="mt-[80px]">
                <SectionHeader
                    title="Job Openings"
                />
            </div>
            <div className="flex flex-col gap-[50px] px-[100px] xl:px-[400px] py-[50px]">
                {jobs.map((job, index) => (
                    <JobListing key={index} role={job.role} jobLink={"/contact-us"} />
                ))}
            </div>
            </div>
        </div>
    );
};