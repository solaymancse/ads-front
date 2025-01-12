import ContentHeader from "@/components/ContentHeader";
import ContentPair from "@/components/ContentPair";
import StaffCard from "@/components/StaffCard";
import BoardCard from "@/components/BoardCard";
import StaffCarousel from "@/components/StaffCarousel";
import StaffCampusSelector from "@/components/StaffCampusSelector";
import SectionHeader from "@/components/SectionHeader";

const directors = [
    {
        imgSrc: "/profilePicture.jpg",
        name: "Dr. Hussain",
        title: "Board Chair",
        description: "Dr. Syed Khaja Hussain has been part of St. Louis community for the  last twenty six years.  He is the previous chairman of the Majlis Al Shura of the Islamic Foundation of Greater St. Louis and a member of the shura for the last 20 years; He has also served as Vice-Chair of IFGSTL as well as  General Secretary of Islamic Foundation and past chair of Social Services committee. He has also served as a Member of the Board of Directors of the Center for Head Injury Services of St Louis. He was the chair of Al-Salam Day School board from 2013-2017 and was reappointed as the Chair of the board in June 2023.",
    },
    {
        imgSrc: "/profilePicture.jpg",
        name: "Sr. Jaime",
        title: "Vice-Chair",
        description: "Dr. Jaime Dodd specializes in the research and application of Montessori theory and practice in early childhood educational settings. She is a member of the executive leadership team for a nonprofit, educational and research institution in St. Louis, Missouri where she has invested more than two decades of her life, representing the greater part of her professional career. Dr. Dodd has served on Al Salam Day School Board continuously, from 2017 to the present. She serves on the board of various St. Louis area non-profit entities, focused primarily on educational, humanitarian and/or healthcare concerns. Dr. Dodd’s passion is manifest in her work with the American Islamic Montessori Association (AIMA), a professional membership organization to advance Islamic Montessori Education (IME) as a bridge to foster understanding, promote education and expand peace across the U.S. and around the globe.",
    },
    {
        imgSrc: "/profilePicture.jpg",
        name: "Faten Tamimi",
        title: "Unknown",
        description: "Faten Tamimi is an alumni of ADS. She attended as a student in first grade when ADS was initially founded and located in the basement of West Pine Masjed in St. Louis University. She was in fourth grade when the new campus was built and only a few classes were available in the basement of Dar Ul-lslam Masjed. Faten is a medicinal chemist and certified Toxicologist. At one point she taught chemistry to ADS Highschool students. She is a lifelong devout community member who has sent all 4 of her children to ADS at various times. Faten joined the board in June 2023.",
    },
];

const administrators = [
    {
        imgSrc: "/profilePicture.jpg",
        name: "Faten Tamimi",
        title: "Unknown",
        description: "Faten Tamimi is an alumni of ADS. She attended as a student in first grade when ADS was initially founded and located in the basement of West Pine Masjed in St. Louis University. She was in fourth grade when the new campus was built and only a few classes were available in the basement of Dar Ul-lslam Masjed. Faten is a medicinal chemist and certified Toxicologist. At one point she taught chemistry to ADS Highschool students. She is a lifelong devout community member who has sent all 4 of her children to ADS at various times. Faten joined the board in June 2023.",
    },
    {
        imgSrc: "/profilePicture.jpg",
        name: "Faten Tamimi",
        title: "Unknown",
        description: "Faten Tamimi is an alumni of ADS. She attended as a student in first grade when ADS was initially founded and located in the basement of West Pine Masjed in St. Louis University. She was in fourth grade when the new campus was built and only a few classes were available in the basement of Dar Ul-lslam Masjed. Faten is a medicinal chemist and certified Toxicologist. At one point she taught chemistry to ADS Highschool students. She is a lifelong devout community member who has sent all 4 of her children to ADS at various times. Faten joined the board in June 2023.",
    },
    {
        imgSrc: "/profilePicture.jpg",
        name: "Faten Tamimi",
        title: "Unknown",
        description: "Faten Tamimi is an alumni of ADS. She attended as a student in first grade when ADS was initially founded and located in the basement of West Pine Masjed in St. Louis University. She was in fourth grade when the new campus was built and only a few classes were available in the basement of Dar Ul-lslam Masjed. Faten is a medicinal chemist and certified Toxicologist. At one point she taught chemistry to ADS Highschool students. She is a lifelong devout community member who has sent all 4 of her children to ADS at various times. Faten joined the board in June 2023.",
    },
];

const eccStaff = [
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Mr. Anderson",
        title: "Teacher",
        subject: "Math",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Young",
        title: "Teacher",
        subject: "Physical Education",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Garcia",
        title: "Teacher",
        subject: "Science",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
];

const adsNorthStaff = [
    {
        name: "Afaf Mutan",
        title: "Director ADS North",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Samia Jaber",
        title: "3rd Grade Teacher",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Nesreen Salameh",
        title: "Preschool Teacher",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Nisrene Abdelsamad",
        title: "",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Abeer Salman",
        title: "QAD Teacher",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Kristen Hill",
        title: "",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Feda Nasser",
        title: "2nd Grade Teacher",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Fatimeh Asmar",
        title: "1st Grade Homeroom",
        subject: "",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
];

const adsWestStaff = [
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Mr. Anderson",
        title: "Teacher",
        subject: "Math",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Young",
        title: "Teacher",
        subject: "Physical Education",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Garcia",
        title: "Teacher",
        subject: "Science",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
    {
        name: "Ms. Judy",
        title: "Teacher",
        subject: "Social Studies",
        background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sem id justo gravida laoreet id vel quam. Vivamus ullamcorper sapien sit amet libero faucibus, ac lacinia enim tincidunt. Integer facilisis erat a purus gravida, vel ultricies purus vestibulum. Sed feugiat, turpis eget malesuada dictum, tortor arcu fringilla nulla, a vestibulum lorem dolor in orci. Nam ac lectus non velit venenatis pellentesque at a eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin euismod mauris sit amet nulla consectetur, nec pellentesque nulla varius."
    },
];

export default function OurTeam() {
    return (
        <div className="flex flex-col pb-[100px]">
            <div className="py-[100px]">
                <SectionHeader
                    title="OUR TEAM"
                    description="Welcome and checkout the great staff that makes our schools great!"
                />
            </div>
            <ContentHeader header="Board of Directors"/>
            <div className="flex justify-center bg-[#E8E6E6] py-[35px]">
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {directors.map((staff, index) => (
                        <BoardCard
                            key={index}
                            imgSrc={staff.imgSrc}
                            name={staff.name}
                            title={staff.title}
                            description={staff.description}
                        />
                    ))}
                </div>
            </div>
            <div className="pt-[20px]">
                <ContentHeader header="Administration"/>
            </div>
            <div className="flex justify-center bg-[#E8E6E6] py-[35px]">
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {administrators.map((staff, index) => (
                        <BoardCard
                            key={index}
                            imgSrc={staff.imgSrc}
                            name={staff.name}
                            title={staff.title}
                            description={staff.description}
                        />
                    ))}
                </div>
            </div>
            <div className="pt-[20px]">
                <ContentHeader header="Faculty and Staff" className="-mb-[50px]"/>
            </div>
            <StaffCampusSelector
                eccStaff={eccStaff}
                adsNorthStaff={adsNorthStaff}
                adsWestStaff={adsWestStaff}
            />
        </div>
    );
};