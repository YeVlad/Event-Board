import ParticipantComponent from "../ParticipantComponent/ParticipantComponent ";

import css from "./ParticipantsList.module.css";
const ParrticipantsList = ({ fetchedParticipants, filter }) => {
  if (!fetchedParticipants || fetchedParticipants.length === 0) {
    return;
  }

  const formatedData = fetchedParticipants[0].participants;

  return (
    <ul>
      {formatedData.map((part) => {
        if (part.full_name.includes(filter) || part.email.includes(filter)) {
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
