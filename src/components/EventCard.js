// each event will have a flyer attatched to it, we need to display this flyer in a nice visual format
// Each event will need its own respective page with detailed descriptions attatched to it
// Tjis right here will just be the event cards
// Will need to dynamically make pages for each event
import Button from "./Button";

export default function EventCard({ title, thumbnail, date, startTime, endTime}) {
    return (
        <div>
            <Button title="Learn more" routeTo=""/>
        </div>
    );
};