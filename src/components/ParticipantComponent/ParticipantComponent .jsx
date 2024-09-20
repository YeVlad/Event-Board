import css from "./ParticipantComponent.module.css";

const ParticipantComponent = ({ full_name, email }) => {
  return (
    <div className={css.part_card}>
      <h3 className={css.event_name}>{full_name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default ParticipantComponent;
