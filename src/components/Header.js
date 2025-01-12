import Image from "next/image";
import ToolTip from "@mui/material/Tooltip";
import { Aboreto  } from "@next/font/google";
import { CgProfile } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import Navbar from './Navbar'
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const aboreto = Aboreto({
    subsets: ['latin'],
    weight: '400',
})

const websiteTitle = "AL-SALAM DAY SCHOOL";

export default function Header() {
    return (
        <div className="w-full outline md:outline-none sticky top-0 z-50 bg-white">
            <div className="w-full flex justify-between items-center px-4 py-2">
                <Link href="/" className="flex items-center gap-[25px] no-underline text-[#1d1d36]">
                    <Image
                        className="w-[47px]"
                        src="/logos/ads_logo_small.svg"
                        alt="ADS Logo"
                        width={180}
                        height={38}
                        priority
                    />
                    <h2 className={`md:text-2xl xl:text-5xl ${aboreto.className}`}>{websiteTitle}</h2>
                </Link>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-6">
                        <a 
                            href="https://payments.madinaapps.com/IFGSTL/544f49ff-f0b8-4b67-911f-fa57ed0587ba"
                            target="_blank"
                            className="rounded-full w-full min-w-[100px] bg-[#282D7A] py-2 text-white text-center inline-block no-underline hover:bg-[#4276B3] font-bold"
                            style={{ borderRadius: '20px' }}
                        >
                            DONATE
                        </a>
                    </div>
                    <div className="hidden lg:flex items-center gap-3">
                        <ToolTip title="Plus Portal">
                            <a href="" target="_blank">
                                <CgProfile size={24} style={{ color: "black" }}/>
                            </a>
                        </ToolTip>
                        <ToolTip title="Bright Wheel">
                            <a href="" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 28 28" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.52301 16.6282C2.71645 17.4349 1.40823 17.4344 0.604655 16.6307C-0.200629 15.8253 -0.203184 14.522 0.606784 13.7118L3.50342 10.8151C4.30998 10.0084 5.61819 10.0088 6.42177 10.8126C7.22663 11.618 7.22918 12.9213 6.41921 13.7314L3.52301 16.6282Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9418 3.52369C10.147 2.71698 10.1478 1.40811 10.9397 0.604389C11.7329 -0.200611 13.0176 -0.203166 13.8158 0.606945L16.67 3.50367C17.4649 4.31037 17.4645 5.61881 16.6721 6.42254C15.8789 7.22796 14.5947 7.23052 13.7961 6.42041L10.9418 3.52369Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.60186 8.45274C3.47796 8.45274 2.56641 7.51989 2.56641 6.37411C2.56641 5.22618 3.47292 4.2959 4.60186 4.2959H8.63875C9.76264 4.2959 10.6738 5.22875 10.6738 6.37411C10.6738 7.52246 9.76768 8.45274 8.63875 8.45274H4.60186Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.45927 22.9341C8.45927 24.0723 7.52615 24.9954 6.381 24.9954C5.23327 24.9954 4.30273 24.0774 4.30273 22.9341V18.8461C4.30273 17.7079 5.23542 16.7852 6.381 16.7852C7.52873 16.7852 8.45927 17.7028 8.45927 18.8461V22.9341Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6517 23.9249C17.4583 24.7316 17.4578 26.0401 16.6543 26.8438C15.849 27.6492 14.5459 27.6513 13.7359 26.8412L10.8393 23.9445C10.0327 23.1378 10.0336 21.8294 10.8371 21.0256C11.6424 20.2202 12.9455 20.2176 13.7555 21.0278L16.6517 23.9249Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.974 18.9941C24.112 18.9941 25.0349 19.927 25.0349 21.0727C25.0349 22.2207 24.1171 23.1514 22.974 23.1514H18.8871C17.7487 23.1514 16.8262 22.2185 16.8262 21.0727C16.8262 19.9248 17.744 18.9941 18.8871 18.9941H22.974Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.9737 10.9187C24.7803 10.1236 26.0885 10.1241 26.8921 10.9161C27.6974 11.7099 27.6999 12.9943 26.8899 13.7927L23.9937 16.6479C23.1872 17.4429 21.879 17.442 21.0754 16.65C20.2701 15.8562 20.2675 14.5718 21.0775 13.7734L23.9737 10.9187Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0371 4.59495C19.0371 3.47085 19.9698 2.55957 21.115 2.55957C22.2631 2.55957 23.1932 3.46582 23.1932 4.59495V8.63256C23.1932 9.75666 22.2606 10.6683 21.115 10.6683C19.9673 10.6683 19.0371 9.76169 19.0371 8.63256V4.59495Z" fill="black"/>
                                </svg>
                            </a>
                        </ToolTip>
                        <ToolTip title="Class Dojo">
                            <a href="" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.317 2 2 12.318 2 25 C 2 27.413 2.3753594 29.739781 3.0683594 31.925781 C 3.7093594 31.194781 4.8551094 30.530406 6.5371094 30.066406 C 8.2571094 29.592406 10.110875 29.537625 11.796875 30.140625 L 10.119141 24.447266 C 9.4921406 25.026266 8.5913906 25.586219 7.2753906 25.949219 C 5.9023906 26.327219 4.4828594 26.022953 3.6308594 25.751953 C 3.6228594 25.517953 3.5957031 25.288734 3.5957031 25.052734 C 3.5957031 25.042734 3.5976562 25.031484 3.5976562 25.021484 C 4.3366563 24.391484 4.9646719 23.275047 5.7636719 22.498047 C 5.6866719 22.476047 5.6122031 22.4615 5.5332031 22.4375 C 4.9142031 22.2425 4.3742969 21.916547 3.9042969 21.560547 C 4.0472969 20.689547 4.2306094 19.834953 4.4746094 19.001953 C 5.5956094 18.694953 6.7889688 18.450578 7.7929688 18.767578 C 8.0439687 18.846578 8.2874375 18.964656 8.5234375 19.097656 C 8.9134375 21.281656 9.8984375 23.943359 9.8984375 23.943359 C 9.9014375 23.941359 9.9319375 23.92325 9.9609375 23.90625 C 10.560937 23.55325 15.99275 20.416812 22.46875 18.632812 C 27.73675 17.180813 33.765031 16.586766 36.082031 16.259766 L 38.310547 23.826172 C 39.539547 22.378172 41.256031 21.424875 43.082031 20.921875 C 45.071031 20.373875 46.608328 20.394313 47.611328 20.820312 C 45.639328 10.127313 36.254 2 25 2 z M 17.457031 5 C 18.045031 5.147 18.703641 5.4073125 19.431641 5.8203125 C 20.598641 6.4833125 21.615484 7.4198906 22.271484 8.5878906 L 25.904297 7.5878906 C 28.767297 6.7988906 31.694625 7.79925 33.515625 9.90625 C 31.967625 9.96325 28.201109 10.230937 23.037109 11.460938 L 23.037109 11.462891 C 22.272109 11.644891 21.484156 11.843313 20.660156 12.070312 C 19.833156 12.298312 19.052781 12.538203 18.300781 12.783203 C 18.300781 12.782203 18.298828 12.780297 18.298828 12.779297 C 12.894828 14.539297 9.4775625 16.614734 8.6015625 17.177734 C 8.9455625 14.256734 11.006578 11.692281 14.017578 10.863281 L 17.375 9.9375 C 16.38 7.8645 15.092562 6.8999688 14.851562 6.1679688 C 15.684562 5.7169687 16.562031 5.34 17.457031 5 z M 30.521484 20.507812 C 30.39625 20.491328 30.266219 20.497453 30.136719 20.533203 C 29.618719 20.676203 29.314031 21.212469 29.457031 21.730469 C 29.600031 22.248469 30.136297 22.551203 30.654297 22.408203 C 31.172297 22.265203 31.475031 21.730891 31.332031 21.212891 C 31.224781 20.824391 30.897188 20.557266 30.521484 20.507812 z M 47.951172 23.582031 C 46.299172 24.852031 42.877563 26.838594 41.101562 33.308594 L 42.900391 39.417969 C 46.086391 35.470969 48 30.456 48 25 C 48 24.524 47.980172 24.051031 47.951172 23.582031 z M 32.949219 23.830078 C 31.387901 23.963144 28.729094 25.952641 24.863281 27.017578 C 19.255281 28.562578 14.806109 27.116609 15.662109 30.224609 C 16.278109 32.459609 20.367641 36.332437 26.931641 34.523438 C 33.472641 32.722437 35.018203 27.271547 34.408203 25.060547 C 34.141641 24.093047 33.658909 23.769594 32.949219 23.830078 z M 17.410156 24.119141 C 17.284922 24.102656 17.154891 24.110734 17.025391 24.146484 C 16.507391 24.289484 16.202703 24.82575 16.345703 25.34375 C 16.488703 25.86175 17.024969 26.164484 17.542969 26.021484 C 18.060969 25.878484 18.363703 25.344172 18.220703 24.826172 C 18.113453 24.437672 17.785859 24.168594 17.410156 24.119141 z M 29.134766 28.003906 C 30.06425 27.986141 30.951094 28.313422 31.652344 28.888672 C 30.798344 30.322672 29.206391 31.822703 26.400391 32.595703 C 25.448391 32.857703 24.517813 32.992187 23.632812 32.992188 C 22.123812 32.992188 20.923281 32.610469 19.988281 32.105469 C 20.398281 30.966469 21.317219 30.035453 22.574219 29.689453 C 23.700219 29.379453 24.838188 29.610031 25.742188 30.207031 C 26.213188 29.232031 27.071266 28.451625 28.197266 28.140625 C 28.511266 28.054125 28.824938 28.009828 29.134766 28.003906 z M 4.0585938 34.496094 C 6.5235937 39.911094 11.026984 44.205437 16.583984 46.398438 L 14.408203 39.007812 C 14.388203 39.017812 14.364703 39.032062 14.345703 39.039062 C 9.8877031 34.715063 6.0865937 34.713094 4.0585938 34.496094 z"></path>
                                </svg>
                            </a>
                        </ToolTip>
                        <ToolTip title="Facebook">
                            <a href="https://www.facebook.com/alsalamdayschool/" target="_blank">
                                <FaFacebook size={24} style={{ color: "black" }}/>
                            </a>
                        </ToolTip>
                        <ToolTip title="Instagram">
                            <a href="https://www.instagram.com/alsalamdayschool/" target="_blank">
                                <FaInstagram size={24} style={{ color: "black" }}/>
                            </a>
                        </ToolTip>
                    </div>
                    <div className="lg:hidden"> {/*This is where the hamburger menu goes */}
                        <HamburgerMenu/>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    );
};