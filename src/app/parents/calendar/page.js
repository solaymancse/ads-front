import SectionHeader from "@/components/SectionHeader";

const calendarPDF = "/calendar/24-25-Calendar.pdf#toolbar=0&navpanes=0&scrollbar=1&zoom=150";

export default function Calendar() {
    return (
        <div className="flex flex-col justify-center items-center">
            <SectionHeader
                title="CALENDAR"
                description="Here is the calendar for the 2024-2025 school year."
            />
            <iframe
                src={calendarPDF}
                className="w-[1240px] h-[900px]"
            />
        </div>
    );
};