const CampusButton = ({ imgSrc, campusName, routeTo }) => {

    return (
        <div 
            className="w-[400px] h-[400px] relative overflow-hidden group"
        >
            <img
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                src={imgSrc}
                alt={campusName}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white gap-[50px]">
                <h2 className="font-bold bg-black bg-opacity-50">{campusName}</h2>
                <a 
                    className="px-2 bg-[#282D7A] py-2 text-white text-center inline-block no-underline hover:bg-[#4276B3]"
                    href={routeTo}
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default function Jumbletron() {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center px-6 xl:px-0 gap-8 xl:gap-[100]">
            <CampusButton imgSrc="/hero/1.jpg" campusName="Early Childhood Center" routeTo="/campuses/early-childhood-center"/>
            <CampusButton imgSrc="/hero/1.jpg" campusName="ADS North" routeTo="/campuses/ads-north"/>
            <CampusButton imgSrc="/hero/1.jpg" campusName="ADS West" routeTo="/campuses/ads-west"/>
        </div>
    );
};