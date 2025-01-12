import SectionHeader from "@/components/SectionHeader";
import ValueCard from "@/components/ValueCard";
import Statistics from "@/components/Statistics";
import Divider from "@mui/material/Divider";
import COLORS from "@/constants/colors";

const mission = "At Al-Salam Day School, our mission is to provide an educational environment that integrates academic excellence with Islamic values through a holistic curriculum rooted in evidence-based practices and a growth mindset. We inspire students to reach their full potential while fostering faith, character, and intellectual curiosity."
const vision = "In partnership with families, we nurture a supportive community where students excel academically, deepen their connection to Islam, and embrace lifelong learning. Together, we aim to cultivate compassionate, ethical, and visionary Muslim leaders prepared to contribute meaningfully to society. As ADS advances all of the goals and pillars in the strategic vision, we will develop an intentional and purposeful plan to define and articulate the school’s institutional identity as a student-centered, evidence-based school that places academic excellence at its core, while instilling Islamic values and principles in all students. Through this defined identity, ADS will strengthen its reputation and differentiate its position within the market. The value proposition around the strategic vision will reinforce the reputation of a school in pursuit of academic excellence and Islamic tenets.";
const values = {
    islamicIdentity: "We aim to provide a safe, nurturing, and inspirational Islamic environment that enables our students to achieve academic excellence and prepares them to be morally and socially responsible citizens guided by the teachings of the Quran and Sunnah, ultimately, empowering students to become model citizens and leaders committed to Islamic principles, life-long learning, and steadfast service to the local and global communities.",
    curriculum: "We are committed to data driven, Islamized instruction that instills a love of learning and a culture of excellence in all aspects of academic and social-emotional dimensions, growing a community of model citizens, while instilling Islamic values and principles in all students.",
    extracurriculars: "We recognize that robust and holistic athletic and extracurricular programs teach leadership, teamwork, and collaboration; helps students improve academic performance, and supports a life of health and wellness. Established and reputable programs can also help the school increase community spirit, strengthen its institutional identity, and support strategic enrollment goals.",
    community: "Establish and solidify quality relationships with educational partners within and throughout the community. We will develop a network of partnerships to enable ADS students to experience meaningful data driven instructional work and opportunity for service. This kind of real-world experience will fundamentally contribute to our students’ understanding of topics and industries as well as to their overall academic, social, emotional, and spiritual preparedness.",
    financial: "We will maintain our commitment to responsible and strategic financial management by focusing on implementing best practices to make all ADS campuses compelling and accessible to the most talented students and will continue to make intentional and mission-aligned financial investments and decisions that simultaneously address the current needs of the school and in advancement of the strategic vision.",
    facilities: "We aim to continuously improve our facilities and technologies to accommodate new and existing programs that align with our strategic goals; incorporate the necessary elements for innovative, inquiry-based teaching and learning; support a variety of evidence-based teaching methods and allow students to explore different approaches to a deeper understanding of themselves and the world around them.",
    talent: "Talent is our number one asset. We aim to ensure  excellence in hiring, retaining and developing staff.",
    communication: "We aim to ensure effective communication is executed by establishing multiple pathways for communication, feedback, and community engagement, reinforcing the ADS brand across the community."
};

const history = `Al-Salam Day School (ADS) was established 1990 at the West Pine Masjid (currently Masjid Bilal)
on the St. Louis University Campus in St.Louis with few students in Preschool and Kindergarten.
After a few years, ADS began adding a grade each year until it reached the 8th Grade. When Dar-
ul-Islam Masjid was completed in March of 1995, ADS moved to the basement in the new building.
We continued adding a grade each year until 1997 when the first inaugural class of 8th graders graduated and went on to continue their high school education at Parkway West, Parkway South,
Chaminade, and Mary Institute Country Day School (MICDS).
We quickly outgrew the space in the Masjid and the community started raising funds to build a
separate school and gymnasium. In 2005 we completed the fundraising and broke ground on the
new structures. In 2007 we moved into the new school and have consistently worked to improve
our school inside and out.`

export default function WhoWeAre() {
    return (
        <div className="flex flex-col gap-[100px] pb-[100px]">
            <SectionHeader
                title="WHO WE ARE"
                description=""
            />
            <div className="flex justify-center w-[full]"> {/* Mission Statement */}
                <div className="w-full flex justify-center">
                    <h1 className="text-6xl">Mission</h1>
                </div>
                <div className="w-full">
                    <p className="w-[500px]">{mission}</p>
                </div>
                <div className="w-full">

                </div>
            </div>
            <div className="flex justify-center items-center h-[500px]"> {/* Our Vision */}
                <div className="bg-black text-white w-full h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-6xl">Our Vision</h1>
                        <div className="w-[50px]">
                            <Divider sx={{ borderColor: 'white', borderWidth: '1px' }} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full px-[60px] flex justify-center items-center">
                    <p>{vision}</p>
                </div>
            </div>
            <Statistics/>
            <div className="px-[100px] relative bg-gray-400 -mt-[100px] py-[50px]">
                <div className="flex w-fill h-[400px] relative z-10">
                    <div className="w-[160%] bg-black">
                        <img
                            src="/blue_banner.jpg"
                            alt="Blue Background Banner"
                            style={{ width: "100%", height: "100%"}}
                        />
                    </div>
                    <div className="w-full"></div>
                </div>
                <div className="flex w-fill h-[400px] relative -mt-[300px] z-20">
                    <div className="w-full"></div>
                    <div className="w-[140%] bg-white flex flex-col justify-center items-center">
                        <h1>Our History</h1>
                        <p>{history}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};