import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { Divider } from "@mui/material";

const welcomeMessage = "It is our great pleasure to welcome you and your family to Al-Salam Day School (ADS). At ADS we are dedicated to making sure that your children receive the finest Islamic and academic education we can possibly provide. In choosing to enroll your children at ADS, we realize you are entrusting us with a great amaanah (trust). Our administration and staff take this responsibility very seriously. We believe we can provide opportunities for your child to grow and succeed. However, our success rate will be greatly multiplied with your support and involvement. InshaAllah, by forming a strong and positive partnership between educators and parents, our children can experience exponential growth and success in both their Deen (Islam) and Dunya (this world).  Here at ADS, we are excited and enthusiastic about providing a warm and nurturing learning environment for your children. Please help us to assist your children on their individual paths to success. You can begin this process by reading this handbook from cover to cover.";
const secondMessage = "Along with general information on the philosophy, goals, mission and policies of our school, this handbook outlines the expectations the administration and staff have for you and your children. As parents and guardians, we strongly urge you to please share this information with your children. Regardless of age, students perform better and experience more positive learning experiences after clear expectations have been communicated to them. By reviewing the rules and regulations which govern our school, you will be paving the way for a smooth and successful school year for your children.";
const prayer = "Please remember to pray for your child and those who are working to educate him/her so that this school year can be the best year yet, inshaAllah.";

export default function SchoolHandbook() {
    return (
        <div className="pb-[100px]">
            <div className="py-[100px]">
                <SectionHeader
                    title="SCHOOL HANDBOOK"
                />
            </div>
            <div
                className="flex items-center justify-center text-area flex-1 w-full px-[50px] lg:px-[200px]"
            >
                <div className="text-black flex flex-col gap-4">
                    <h3>Welcome</h3>
                    <div className="w-[50px] pb-[5px]">
                        <Divider sx={{ borderColor: 'black', borderWidth: '1px' }} />
                    </div>
                    <small>{welcomeMessage}</small>
                    <small>{secondMessage}</small>
                    <small>{prayer}</small>
                    <div>
                        <Button title="Open school handbook" routeTo="/schoolHandbook-24-25.pdf" newTab={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};