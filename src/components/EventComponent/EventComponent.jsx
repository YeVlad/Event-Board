import { Link } from "react-router-dom";
import css from "./EventComponent.module.css";

const EventComponent = ({ id, title, desc }) => {
  return (
    <div className={css.event_card}>
      <h3 className={css.event_name}>{title}</h3>
      <p>{desc}</p>
      <div className={css.links}>
        <Link to={`registration/${id}`}>Register</Link>
        <Link to={`participants/${id}`}>View</Link>
      </div>
    </div>
  );
};

export default EventComponent;
