import EventComponent from "../EventComponent/EventComponent";

import css from "./EventsList.module.css";
const EventsList = ({ fetchedEvents }) => {
  if (!fetchedEvents || fetchedEvents.length === 0) {
    return;
  }

  return (
    <ul>
      {fetchedEvents.map((event) => {
        console.log(event);
        return (
          <li key={event._id}>
            <EventComponent
              id={event._id}
              title={event.title}
              desc={event.description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
