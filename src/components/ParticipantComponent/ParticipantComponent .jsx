const ParticipantComponent = ({ full_name, email }) => {
  return (
    <div className="part_card">
      <h3 className="event_name">{full_name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default ParticipantComponent;
