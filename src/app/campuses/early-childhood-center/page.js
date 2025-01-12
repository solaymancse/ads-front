import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";

export default function ECC() {
    return (
        <div className="my-[80px]">
            <SectionHeader
                title={<div>
                    <h1 className="font-semibold">EARLY CHILDHOOD <br /> CENTER</h1>
                </div>}
                description={"Welcome to ADS Early Childhood Center (ECC)! At ECC, we believe that the early years are the foundation for a lifetime of learning and growth. Our Montessori Early Childhood Center is dedicated to providing a nurturing, stimulating, and safe environment where young children can explore, discover, and thrive from ages 6 weeks to 5 years old."}
            />

            <div className="w-full mt-20 px-20">
                <div className="grid grid-cols-2">
                    <div className="bg-[#2B458F] text-center w-full p-24">
                        <h3 className="text-black mb-4">Montessori</h3>
                        <p2 className="text-white px-8 font-extralight leading-8">We proudly embrace the Montessori philosophy, which emphasizes child-led learning and hands-on experiences. This approach encourages independence, creativity, and critical thinking, allowing children to learn at their own pace and follow their natural curiosity. Our classrooms are thoughtfully designed to foster a love for learning, with carefully curated materials and activities that promote exploration and discovery</p2>
                    </div>
                    <div>
                        <img src="/ecc/ecc.webp" />
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <img src="/ecc/ecc1.webp" />
                    </div>
                    <div className="text-center mt-8 text-black w-full p-24">
                        <h3 className=" mb-4">Talented Educators</h3>
                        <p2 className="px-8 font-extralight leading-8">Our experienced and caring educators are committed to fostering each child's unique potential through a balanced curriculum that includes play-based learning, creative arts, and foundational academic skills. We emphasize the importance of social-emotional development, helping children build confidence, empathy, and a love for learning.</p2>
                    </div>

                </div>
            </div>

            <div className="bg-[#CECDD5]  py-20 text-center my-20">
                <div className="max-w-2xl text-black flex flex-col items-center mx-auto">
                    <h2 className="font-semibold ">Join us at ECC</h2>
                    <p2 className="my-4">Where every child is valued, every moment is a learning opportunity, and every day is filled with joy and discovery. We look forward to partnering with you on this exciting journey!</p2>
                    <Button
                    title={"Enroll"}
                    />
                </div>
            </div>

            {/* <div style={{backgroundImage:URL}}>

            </div> */}
        </div>
    );
};