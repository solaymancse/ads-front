import ContentPair from "@/components/ContentPair";
import MultipleContentPair from "@/components/MultipleContentPair";
import SectionHeader from "@/components/SectionHeader";

export default function Extracurriculars() {
    return (
        <div>
            <div className="my-[100px]">
                <SectionHeader title="Our Programs" description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." />

                <div className="mt-[50px]">
                    <ContentPair
                        imgSrc="/hero/1.jpg"
                        height={500}
                        imageLeft={true}
                    >
                        <div className="px-32">
                            <h1 className="text-[#4276B3]  font-semibold font-xl text-start mb-8">Principal's Message</h1>
                            <p className="text-[#f5f5f5] font-extralight mb-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                            <p className="text-[#f5f5f5] font-extralight">This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your own company</p>
                        </div>
                    </ContentPair>
                    <ContentPair
                        imgSrc="/hero/1.jpg"
                        height={500}
                        imageLeft={false}
                    >
                        <div className="px-36">
                            <h1 className="text-[#4276B3] font-semibold font-2xl text-start mb-8">
                                Vision & Values</h1>
                            <ul className="text-[#fff] font-extralight text-[22px]">
                                <li>Be Kind</li>
                                <li>Be Respectful</li>
                                <li>Be Responsible</li>
                                <li>Work Hard</li>
                                <li>Have Fun</li>
                            </ul>

                        </div>
                    </ContentPair>

                </div>
            </div>

            <div className="mb-[100px]">
                <SectionHeader title="ACADEMICS" description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." />

                <div className="mt-[50px] bg-[#688DDC] py-20">
                    <MultipleContentPair
                        imgSrc="/hero/1.jpg"
                        height={436}
                        imageLeft={false}
                        bg="bg-white"
                    >
                        <div className="text-[#1d1d36] px-20">
                            <h1 className="text-[24px]">Math</h1>
                            <p className="text-[16px] font-extralight mb-8">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know a little more about you</p>

                            <div className="bg-blue-500 hover:bg-white hover:border hover:border-black transition-all duration-300 ease-in-out  flex justify-center items-center h-[46px] w-[152px] font-extralight text-white text-center  hover:text-black mt-4">Learn More</div>
                        </div>
                    </MultipleContentPair>
                    <MultipleContentPair
                        imgSrc="/hero/1.jpg"
                        height={436}
                        imageLeft={true}
                        bg="bg-[#1D1D36]"
                    >
                        <div className="text-[#fff] px-20">
                            <h1 className="text-[24px]">
                                Literature Arts</h1>
                            <p className="text-[16px] font-extralight mb-8">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know a little more about you</p>
                            <div className="bg-blue-500 hover:bg-white hover:border hover:border-black transition-all duration-300 ease-in-out hover:text-black  flex justify-center items-center h-[46px] w-[152px] font-extralight text-center mt-4">Learn More</div>
                        </div>
                    </MultipleContentPair>
                    <MultipleContentPair
                        imgSrc="/hero/1.jpg"
                        height={436}
                        imageLeft={false}
                        bg="bg-white"
                    >
                        <div className="text-[#1d1d36] px-20">
                            <h1 className="text-[24px]">Math</h1>
                            <p className="text-[16px] font-extralight mb-8">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know a little more about you</p>
                            <div className="bg-blue-500 hover:bg-white hover:border hover:border-black transition-all duration-300 ease-in-out hover:text-black text-white flex justify-center items-center h-[46px] w-[152px] font-extralight text-center mt-4">Learn More</div>
                        </div>
                    </MultipleContentPair>

                </div>

            </div>
        </div>
    );
};