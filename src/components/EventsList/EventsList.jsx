import EventComponent from "../EventComponent/EventComponent";

const EventsList = ({ fetchedEvents }) => {
  if (!fetchedEvents || fetchedEvents.length === 0) {
    return;
  }

  return (
    <ul className="listOf">
      {fetchedEvents.map((event) => {
        return (
          <li key={event._id}>
            <EventComponent
              id={event._id}
              title={event.title}
              desc={event.description}
              event_date={event.event_date}
              organizer={event.organizer}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
