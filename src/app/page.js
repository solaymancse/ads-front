import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import ContentHeader from "@/components/ContentHeader";
import ContentPair from "@/components/ContentPair";
import Jumbletron from "@/components/Jumbletron";
import CampusButtons from "@/components/CampusButtons";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

const schoolDescription = `
    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your own company.
`;

const ourSchool = "Explore our diverse campuses, offering programs from 8 weeks - 12th grade.";

export default function Main() {
    return (
        <div className="">
            <Hero/>
            <div className="py-[70px]">
                <ContentHeader
                    header="SAFETY MEASURES IN PLACE"
                    text="We do everything to ensure the health, safety and well-being of our students and employees. Additional information can be found here"
                />
            </div>
            <div className="flex flex-col md:px-[80px]">
                <ContentPair
                    imgSrc="/exampleBanner.png"
                    height={400}
                    imageLeft={true}
                >
                    <div className="text-[#fff] px-10 xl:px-40 flex justify-center items-center flex-col gap-[16px]">
                        <h3 className="mb-2">Who We Are</h3>
                        <small className="text-center font-extralight mb-2">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know a little more about you</small>
                        <Button title="Learn more" routeTo="/our-school/who-we-are"/>
                    </div>
                </ContentPair>
                <ContentPair
                    imgSrc="/exampleBanner.png"
                    imageLeft={false}
                >
                    <div className="h-fill text-[#fff] px-10 xl:px-40 flex justify-center items-center flex-col gap-[16px]">
                        <h3 className="mb-2">Curriculum</h3>
                        <small className="text-center font-extralight mb-2">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know a little more about you</small>
                        <Button title="Learn more" routeTo="/academics/curriculum"/>
                    </div>
                </ContentPair>
                <ContentPair
                    imgSrc="/exampleBanner.png"
                    height={400}
                    imageLeft={true}
                >
                    <div className="text-[#fff] px-10 xl:px-40 flex justify-center items-center flex-col gap-[16px]">
                        <h3 className="mb-2">News and Events</h3>
                        <small className="text-center font-extralight mb-2">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know a little more about you</small>
                        <Button title="Learn more" routeTo="/news-and-events"/>
                    </div>
                </ContentPair>
            </div>
            <div className="flex flex-col py-[50px]">
                <ContentHeader
                    header="OUR SCHOOL"
                    text={ourSchool}
                />
                <CampusButtons/>
                <NewsLetter/>
            </div>
        </div>
    );
};