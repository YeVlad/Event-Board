import ParticipantComponent from "../ParticipantComponent/ParticipantComponent ";

const ParrticipantsList = ({ fetchedParticipants, filter }) => {
  if (!fetchedParticipants || fetchedParticipants.length === 0) {
    return;
  }

  const formatedData = fetchedParticipants[0].participants;

  return (
    <ul className="parti">
      {formatedData.map((part) => {
        if (
          part.full_name.toLowerCase().includes(filter.toLowerCase()) ||
          part.email.toLowerCase().includes(filter.toLowerCase())
        ) {
          return (
            <li key={part._id}>
              <ParticipantComponent
                full_name={part.full_name}
                email={part.email}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ParrticipantsList;
