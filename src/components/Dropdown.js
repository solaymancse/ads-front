import { useRouter } from "next/navigation";

export default function Dropdown({ items }) {
    const router = useRouter();

    return (
        <div className="bg-white shadow-lg shadow-[0px_10px_30px_rgba(82,63,105,0.05)] transition-all duration-300 ease-linear w-max rounded-lg">
            <ul className="list-none p-0 m-0 bg-white">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="p-[14px] text-gray-700 transition-all duration-300 ease-linear hover:bg-gray-500 hover:cursor-pointer hover:text-white"
                        onClick={() => { router.push(item.routeTo); }}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
