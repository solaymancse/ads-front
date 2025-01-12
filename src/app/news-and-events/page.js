import SectionHeader from "@/components/SectionHeader";
import PlaceHolder from "@/components/Placeholder";

export default function NewsAndEvents() {
    return (
        <div>
            <SectionHeader title="News"/>
            {/* Embedded news letter */}
            {/* Join news letter form*/}
            <SectionHeader title="Events"/>
            <PlaceHolder/>
        </div>
    );
};