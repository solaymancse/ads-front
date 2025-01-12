export default function MultipleContentPair({ bg, height, imgLeft, imgRight, childrenLeft, childrenRight, imageLeft = true }) {

    console.log({childrenLeft})
    const ImageLeft = () => {
        return (
            <div className="flex-1">
                <div className="h-full w-full">
                    <img
                        src={imgLeft}
                        alt="Left Section"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        );
    };
    const ImageRight = () => {
        return (
            <div className="flex-1">
                <div className="h-full w-full">
                    <img
                        src={imgRight}
                        alt="Left Section"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        );
    };

    const ContentLeft = () => {
        return (
            <div
                className={`flex items-center justify-center text-area flex-1 ${bg}`}
            >
                <div>
                    {childrenLeft}
                </div>
            </div>
        );
    };
    const ContentRight = () => {
        return (
            <div
                className={`flex items-center justify-center text-area flex-1 ${bg}`}
            >
                <div>
                    {childrenRight}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-[1350px] mx-auto">
            <div
                className="flex flex-col xl:flex-row justify-center items-center  "
                style={{
                    height: `${height}px`,
                }}
            >
                <div className="flex flex-col md:flex-row w-full h-full">
                    {imageLeft && (
                        <ImageLeft />
                    )}
                    <ContentLeft />
                    {!imageLeft && (
                        <ImageLeft />
                    )}
                </div>
                <div className="flex flex-col md:flex-row w-full h-full">
                    {imageLeft && (
                        <ImageRight />
                    )}
                    <ContentRight />
                    {!imageLeft && (
                        <ImageRight />
                    )}
                </div>
            </div>
        </div>
    );
};