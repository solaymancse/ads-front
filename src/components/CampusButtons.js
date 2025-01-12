import Button from "./Button";

export default function CampusButtons() {
    return (
        <div className="w-full h-[1100px] md:h-[500px] py-[20px] relative overflow-hidden group">
            <img
                className="w-full h-full object-cover"
                src="/adsBubbles.jpg"
                alt="Campus Buttons Background Image"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white gap-[50px]">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col justify-center items-center w-[300px] h-[300px] gap-3 text-center bg-black">
                        <h3>ECC</h3>
                        <Button title="Learn More" routeTo="/campuses/early-childhood-center"/>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[300px] h-[300px] gap-3 text-center bg-black">
                        <h3>ADS North</h3>
                        <Button title="Learn More" routeTo="/campuses/ads-north"/>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[300px] h-[300px] gap-3 text-center bg-black">
                        <h3>ADS West</h3>
                        <Button title="Learn More" routeTo="/campuses/ads-west"/>
                    </div>
                </div>
            </div>
        </div>
    );
};