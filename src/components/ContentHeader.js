export default function ContentHeader({ header, text, pageHeader=false }) {
    const textDefined = () => {
        return !(text === null || text === "");
    }

    return (
        <div className="flex flex-col items-center justify-center text-center py-[0px]">
            {!pageHeader && (
            <h2 className="font-semibold text-black">{header}</h2>
            )}
            {pageHeader && (
                <h2 className="font-semibold text-black">{header}</h2>
            )}
            {textDefined() && (
            <small className="w-[600px] text-center px-16 font-extralight leading-7">{text}</small>
            )}
        </div>
    );
};