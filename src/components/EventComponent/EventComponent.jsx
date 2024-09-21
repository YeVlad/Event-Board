import { Link } from "react-router-dom";

const EventComponent = ({ id, title, desc, event_date, organizer }) => {
  return (
    <div className="event_card">
      <h3 className="event_name">{title}</h3>
      <p className="small_text">{desc}</p>
      <p className="small_text">{event_date}</p>
      <p className="small_text">Organizer: {organizer}</p>
      <div className="links">
        <Link to={`registration/${id}`}>
          <p className="small_text">Register</p>
        </Link>
        <Link to={`participants/${id}`}>
          <p className="small_text">View</p>
        </Link>
      </div>
    </div>
  );
};

export default EventComponent;
