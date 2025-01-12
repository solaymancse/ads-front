import ContentHeader from "@/components/ContentHeader";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import Question from "@/components/Question";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const lunchQuestions = [
    {
        question: "Does Al-Salam Day School serve hot lunches to students?",
        answer: "Yes. Al-Salam Day School (ADS) serves hot lunches five days a week. The lunch menu changes from month to month. Please view your “Lunch Menu” under Calendars & Directories on your Orbund menu to view the lunch menu for each month. Hot lunches are served in the Early Childhood Center (ECC) as well."
    },
    {
        question: "Are these lunches halal?",
        answer: "Yes! One of the perks of sending your child to an Islamic private school is having the peace of mind in knowing your child will never be served food or snacks that are not Halal. We pay special attention to all food that is served from Al-Salam Day School and make certain that the food is certified Halal."
    },
    {
        question: "How can my child pay for their hot lunch?",
        answer: "Students cannot pay in cash in our cafeteria. Our lunch staff is limited and must focus solely on serving lunch to our students in a timely manner. Parents of ADS & ECC students can purchase pre-paid lunch cards from Ustath Issam in the main office of ADS. Lunch cards can be purchased for one day or multiple days. For single day lunch purchases to be used on the same day, lunch cards should be purchased before 9 am to be included in that day’s lunch count. Unfortunately, we cannot provide a child with a hot lunch from the cafeteria without being paid in advance."
    },
    {
        question: "Can my child bring lunch to school?",
        answer: "Absolutely! We suggest bringing items that already have eating utensils, if needed. Also, although there is a microwave available for use, we do not recommend students bring lunches that need to be heated, as those students tend to get caught in a lengthy line for the microwave which interferes with their lunch time."
    },
    {
        question: "What if my child forgot to take their lunch bag to school?",
        answer: "Parents who have to bring lunch bags to school after 8 am are asked to bring the lunch in a bag, marked with the student’s full name and grade, to the front desk in the main office for safety reasons and to minimize classroom disruption. InshaAllah, an ADS staff member will make sure your child receives their lunch on time."
    },
    {
        question: "My child has an allergy. How do I maximize their safety?",
        answer: "If your child has an allergy, we advise that you inform your child’s homeroom teacher of the allergy as soon as possible. If medication needs to be administered in case of an allergic reaction, you should also fill out a medication administration form (that can be provided by the homeroom teacher or main office staff). This gives staff and homeroom teacher the information and consent needed to administer medication."
    },
    {
        question: "Can my child bring in a snack for his/her classmates?",
        answer: "Students can bring in snacks for their class with the approval of the homeroom teacher. The homeroom teacher will first seek the approval of the administration and make sure the item brought in is Halal and safe for consumption. The homeroom teacher will then let you know of the decision."
    },
];

const transportationaQuestions = [
    {
        question: "Does Al-Salam Day School provide transportation to schools?",
        answer: "At this time, ADS and ECC do not provide daily tranportation to school. Parents are required to drop off and pick up all students on time. For field trips, formal transporation will be arranged. "
    },
];

const attendanceQuestions = [
    {
        question: "What are the school hours?",
        answer: "ADS school doors open for students at 7:30 am and assembly begins at 7:45 am. ADS dismissal time is 3:30 pm. ECC school doors open at 7:45 am (7:30 am for Daycare) and instructional time begins at 8:00 am. ECC dismissal time is 3:15 pm (Daycare lasts until 5:00 pm). Summer Hours: 9 am - 4 pm"
    },
    {
        question: "Is after school care available?",
        answer: "Al-Salam Day School: Al-Salam Day School students who are not picked up on time (by 3:50 pm) will be sent to After-Care room. The parent/guardian picking up the student(s) will be charged a fee, as stated in your child(ren)\’s registration forms. Please note, if your child is enrolled in one of Dar-Ul-Islam’s after-school Quran programs located in Dar-Ul-Islam, which is unaffiliated with Al-Salam Day School, that program is fully responsible for the child, not Al-Salam Day School. Early Childhood Center After-school care is available to all ECC students until 5:00 pm. Parents can either enroll their child in regular after-school care or call the ECC in advance to let us know that their child(ren) will need to be placed in after-school care for that day, in case a child cannot be picked up on time Students who are not picked up during dismissal time are automatically placed in Daycare until the child is picked up. Parents will then receive a bill for this service."
    },
    {
        question: "What are monthly PLC/Late Start Days?",
        answer: "A professional learning community (PLC) is an extended learning opportunity to foster collaborative learning among colleagues within a particular work environment or field. It is often used in schools as a way to organize teachers into working groups. On the last Wednesday of every month, as noted on your academic calendar, teachers and staff attend PLCs from 7:30 am-9:30 am. ADS opens its doors to students at 9:30 am."
    },
    {
        question: "Where do I get the academic calendar?",
        answer: "You can find one here! When the academic calendar for the new year is available, parents will receive a newsletter with a copy of the calendar, the calendar will be posted on our website, and extra copies will be available in the main offices of ADS and the ECC."
    },
];

const communicationQuestions = [
    {
        question: "How can I receive important school news and announcements?",
        answer: "ADS Weekly Newsletters: You can subscribe to our weekly newsletters by visiting our news page here. These newsletters keep parents apprised of upcoming events, news, and programs they and their children can take part in. It’s all very useful information!\ Text Alerts: You can also receive important announcements via text messaging. Sign up with our text messaging service here. Visit our home page and sign up to receive announcements, such as when school is canceled due to inclement weather, directly to your phone. Praxi: We send important announcements from Praxi, our school’s information management system. When you enroll your child(ren) in ADS or the ECC, you automatically receive an account username and password. Through this system, you can communicate with teachers and the administration, view student grades, progress reports and report cards, and view announcements from teachers. The principal and administration will also post announcements and send emails to you through this service. If you are having trouble logging in or have lost your username and/or password, please contact ads@alsalamdayschool.org."
    },
];

const uniformQuestions = [
    {
        question: "Is there a dress code at ADS?",
        answer: "Al-Salam Day School: Students are required to wear school uniforms. Early Childhood Center: There is no required school uniform."
    },
    {
        question: "How do I order new uniforms for my son/daughter?",
        answer: "You may to elect to order from our vendor French Toast or from other stores that adhere to the dress code. Dress code is as follows: Grades KG-5 Girls: Light blue blouse Plaid jumper Navy blue pants Boys: Light blue button-down shirt Navy blue pants (no skinny jeans) Grade 6-12 Girls: Black abaya or ADS abaya (ads@alsalamdayschool.org) Boys: Green or blue button down shirt Khaki pants (no skinny jeans)"
    },
];

const tuititionQuestions = [
    {
        question: "What is general tuition?",
        answer: "Please refer to the tuitions page for more details, here."
    },
    {
        question: "Is financial aid available?",
        answer: "Yes financial aid is available on a limited basis. The decision to award financial aid is based on demonstrated financial need and requires approval from the ADS Board. While the financial aid process may be time-consuming and detailed, applicants are strongly encouraged to apply. It is imperative to provide honest and accurate information when completing the application. All required documentation must be submitted for the application to be considered. Please note that submission does not ensure approval of financial aid. Financial aid forms are available in the main office of ADS, and parents or guardians must provide proof of income. Early submission of financial applications is recommended due to limited funds. Private schooling constitutes a partnership between the school and the family. When a school commits to providing financial support for a student, it seeks a reciprocal commitment from the family. Even if your family qualifies for significant aid, you should anticipate contributing some portion to this partnership."
    },
];

const conductQuestions = [
    {
        question: "Where can I view the parent/student handbook?",
        answer: "A copy of the handbook is found under the “Parent” menu on our website or by clicking here. Please review the handbook to familiarize yourself with ADS policies."
    },
];

export default function FAQ() {
    return (
        <div className="w-full px-[100px] pb-[100px]">
            <div className="flex flex-col justify-center items-center py-[100px] gap-4">
                <SectionHeader 
                    title="FREQUENTLY ASKED QUESTIONS"
                    description="Here are the most frequently asked questions. If you have any specific questions not seen here. Please don't hesitate to contact us!"
                />
                <Button title="As a question" routeTo="/contact-us"/>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-center">Lunch</h3>
                    {lunchQuestions.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-center">Transportation</h3>
                    {transportationaQuestions.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-center">Attendance</h3>
                    {attendanceQuestions.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-center">Communication</h3>
                    {communicationQuestions.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-center">School Uniforms</h3>
                    {uniformQuestions.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-center">Tuition</h3>
                    {tuititionQuestions.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h3 className="text-center">Code of Conduct</h3>
                    {conductQuestions.map((item, index) => (
                        <Question key={index} question={item.question} answer={item.answer}/>
                    ))}
                </div>
            </div>
        </div>
    );
};