export default function Button({ title, routeTo, newTab=false }) {
    return (
        <a 
            className="font-extralight px-[20px] text-centerpx-4 bg-secondary2 py-2 text-white text-center inline-block no-underline hover:bg-secondary1 transition-colors duration-300 ease-in-out"
            href={routeTo}
            target={newTab ? "_blank" : ""}
        >
            {title}
        </a>
    );
};