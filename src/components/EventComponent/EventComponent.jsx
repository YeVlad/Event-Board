import { Link } from "react-router-dom";

const EventComponent = ({ id, title, desc, event_date, organizer }) => {
  return (
    <div className="event_card">
      <h3 className="event_name">{title}</h3>
      <p>{desc}</p>
      <p>{event_date}</p>
      <p>Organizer: {organizer}</p>
      <div className="links">
        <Link to={`registration/${id}`}>Register</Link>
        <Link to={`participants/${id}`}>View</Link>
      </div>
    </div>
  );
};

export default EventComponent;
