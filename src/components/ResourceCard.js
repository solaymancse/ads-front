export default function ResourceCard({ imgSrc, title, description, buttonTitle, buttonLink, newTab=true }) {
    return (
        <div className="w-screen px-4 md:px-0 md:w-fit flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="bg-white w-[150px] h-[150px]"> {/*Leftside Image */}
                <img
                    src={imgSrc}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <div> {/*Rightside Content*/}
                <div className="flex flex-col justify-center items-center md:justify-normal md:items-start w-full md:w-[700px] gap-3">
                    <h4>{title}</h4>
                    <small className="w-full">{description}</small>
                    {buttonTitle != null && (
                        <a
                            href={buttonLink}
                            target={newTab ? "_blank" : ""}
                            className="rounded-lg w-fit bg-[#282D7A] py-2 text-white text-center inline-block no-underline hover:bg-[#4276B3] font-bold px-[20px]"
                        >
                            {buttonTitle}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};