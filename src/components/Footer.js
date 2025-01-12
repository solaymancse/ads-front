import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex gap-5 flex-col md:flex-row justify-between items-center px-[100px] py-4 bg-[#d4d4d4] h-fill w-full">
            {/* Quick Nav Section */}
            <div className="hidden md:flex items-center gap-[25px]">
                <a href="/news" className="text-black hover:text-blue-600 no-underline">
                    <span>NEWS</span>
                </a>
                <span>|</span>
                <a href="/events" className="text-black hover:text-blue-600 no-underline">
                    <span>EVENTS</span>
                </a>
                <span>|</span>
                <a href="/parents/calendar" className="text-black hover:text-blue-600 no-underline">
                    <span>CALENDAR</span>
                </a>
                <span>|</span>
                <a href="#" className="text-black hover:text-blue-600 no-underline">
                    <span>PLUS PORTAL</span>
                </a>
            </div>

            {/* Centered Logo */}
            <Image
                src="/logos/ads_logo_small.svg"
                alt="ADS Logo"
                width={100}
                height={38}
                priority
            />

            {/* Contact Us Section */}
            <div>
                <a
                    href="/contact-us"
                    className="block w-fill px-[15px] text-center bg-[#282D7A] py-4 text-white font-bold rounded-full hover:bg-[#4276B3] transition-all no-underline"
                >
                    CONTACT US
                </a>
            </div>
        </footer>
    );
}
