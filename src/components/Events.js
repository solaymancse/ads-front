import EventCard from "./EventCard";

// handle showing multiple event cards at once here
const events = [
    {
        title: "",
        date: "",
        startTime: "",
        endTime: "", // this can be null or empty
        description: "",
        thumbnail: "",
        flyer: ""
    },
];

export default function Events() {
    return (
        <div>
            {events.map((event, index) => (
                <EventCard 
                    key={index}
                    title={event.title}
                    data={event.date}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    thumbnail={event.thumbnail}
                />
            ))}
        </div>
    );
};