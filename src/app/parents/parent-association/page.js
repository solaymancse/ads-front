import SectionHeader from "@/components/SectionHeader";
import ContentPair from "@/components/ContentPair";
import ContentHeader from "@/components/ContentHeader";
import Button from "@/components/Button";

const significance = "The purpose of parent involvement in PA is to fulfill a crucial role in student spirit and the school environment. According to PTO Today, when parents are involved in a child’s education, both at home and at school, children perform better academically. This includes higher grades and test scores, improved attendance, better social skills, fewer behavioral problems, and a tendency to graduate and continue their education.";
const whoWeAre = "The Al-Salam Day School PA is a nonprofit parent/teacher organization whose membership includes all parents, legal guardians, and staff at Al-Salam Day School. The PA's mission is to promote open communication and understanding between parents and staff of Al-Salam Day School. Our efforts serve to enhance and maximize the education of every child while aiding them in achieving their highest potential. The PTO sponsors assistance to teachers in classroom settings, holds fund-raisers for supplemental educational materials and experiences, supports school and family social interaction, and provides a non-biased forum for sharing information on issues that impact our children. It is our belief that the team effort of a parent-teacher organization offers the best possible learning environment for our children.";
const paBoard = "A Parent Association generally consists of a board. These members may include a president, vice president, secretary, and treasurer. They may also include various specialty positions, such as hospitality or programs. The board typically governs the PA by creating and voting on meeting dates.";

const activities = {
    parents: "Parent Associations become involved by supporting their students, teachers, and staff. Parents can volunteer to assist with class parties or field trips. They can help set up annual bazaars, or they can help teachers and staff with other work.",
    teachers: "Teachers and staff can become involved by helping to plan events that encourage the education of the students. These may include workshops, tutoring, or special family nights (art night, movie night).",
    students: "Students benefit from the involvement and support of all adults involved in the PA. The PA supports the educational goals of Al-Salam Day School, thus extending those goals to the students.",
}

export default function ParentAssociation() {
    return (
        <div>
            <div className="">
                <div className="py-[100px]">
                    <SectionHeader
                        title="PARENT ASSOCIATION"
                        description="Parent Associations (PAs) can take many forms, from informal to highly organized groups. Each group has a different purpose; generally, PTOs are intended to increase parent involvement and facilitate parent-teacher communications."
                    />
                </div>
                <div className="md:px-[65px]">
                    <ContentPair
                        imgSrc="/adsSchoolPhoto.jpg"
                        imageLeft={false}
                    >
                        <div className="flex flex-col justify-center items-center text-center gap-5 px-[120px]">
                            <h3 className="text-[#5C5ADB]">Parent Association</h3>
                            <div>
                                <small className="text-white text-[16px] leading-loose">{significance}</small>
                            </div>
                            <div className="flex flex-col gap-4">
                                <small className="text-white w-[300px] leading-loose">To participate, please contact: ads@alsalamdayschool.org</small>
                                <Button title="Contact Us" routeTo="/contact-us"/>
                            </div>
                        </div>
                    </ContentPair>
                    <ContentPair
                        imgSrc="/adsSchoolPhoto.jpg"
                        color="white"
                        imageLeft={true}
                    >
                        <div className="flex flex-col justify-center items-center text-center gap-5">
                            <h3 className="text-black">Who We Are</h3>
                            <small className="text-left text-[16px] w-[400px] text-[#1D1D36]">{whoWeAre}</small>
                        </div>
                    </ContentPair>
                    <ContentPair
                        imgSrc="/adsSchoolPhoto.jpg"
                        imageLeft={false}
                    >
                        <div className="flex flex-col justify-center items-center text-center gap-5">
                            <h3 className="text-[#5C5ADB]">PA Board</h3>
                            <small className="text-[16px] w-[400px] text-white leading-loose">{paBoard}</small>
                        </div>
                    </ContentPair>
                </div>
                <div className="pt-[100px]">
                    <ContentHeader header="Activities"/>
                </div>
                <div className="w-full h-[1800px] xxsm:h-[1700px] xsm:h-[1600px] md:h-[600px] py-[20px] relative overflow-hidden group">
                    <img
                        className="w-full h-full object-cover"
                        src="/exampleBanner.png"
                        alt="Campus Buttons Background Image"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white gap-[50px]">
                        <div className="flex flex-col md:flex-row gap-4 px-[50px] md:px-0">
                            <div className="flex flex-col pt-[75px] w-full h-fill pb-[30px] md:pb-0 md:w-[300px] md:h-[450px] px-[30px] text-center bg-white gap-3">
                                <h5 className="text-black">Parents</h5>
                                <small className="text-gray-400">{activities.parents}</small>
                            </div>
                            <div className="flex flex-col pt-[75px] w-full h-fill pb-[30px] md:pb-0 md:w-[300px] md:h-[450px] px-[30px] text-center bg-white gap-3">
                                <h5 className="text-black">Teachers and Staff</h5>
                                <small className="text-gray-400">{activities.teachers}</small>
                            </div>
                            <div className="flex flex-col pt-[75px] w-full h-fill pb-[30px] md:pb-0 md:w-[300px] md:h-[450px] px-[30px] text-center bg-white gap-3">
                                <h5 className="text-black">Students</h5>
                                <small className="text-gray-400">{activities.students}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};