export default function ContentPair({ imgSrc, children, imageLeft = true, color = "#1D1D36" }) {
    return (
        <div className="mx-0 md:mx-auto w-full">
            <div className="flex justify-center items-center px-6 xl:px-0 h-full">
                <div className="flex flex-col md:flex-row w-full h-full">
                    {/* Content Section */}
                    <div
                        className="md:w-1/2 flex items-center justify-center flex-1 py-[50px]"
                        style={{ backgroundColor: color }}
                    >
                        {children}
                    </div>

                    {/* Image Section */}
                    <div
                        className={`order-none ${
                            imageLeft ? "md:order-first" : "md:order-last"
                        } md:w-1/2`}
                    >
                        <div className="relative w-full h-[25%] md:h-full">
                            <img
                                src={imgSrc}
                                alt="Content Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
