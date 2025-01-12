import StaffCard from "./StaffCard";

export default function StaffGrid({ staff }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((staff, index) => (
                <StaffCard
                    key={index}
                    name={staff.name}
                    title={staff.title}
                    subject={staff.subject}
                    background={staff.background}
                />
            ))}
        </div>
    );
};