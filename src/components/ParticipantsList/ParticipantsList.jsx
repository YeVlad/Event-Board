import ParticipantComponent from "../ParticipantComponent/ParticipantComponent ";

import css from "./ParticipantsList.module.css";
const ParrticipantsList = ({ fetchedParticipants }) => {
  if (!fetchedParticipants || fetchedParticipants.length === 0) {
    return;
  }

  const formatedData = fetchedParticipants[0].participants;

  return (
    <ul>
      {formatedData.map((part) => {
        return (
          <li key={part._id}>
            <ParticipantComponent
              full_name={part.full_name}
              email={part.email}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ParrticipantsList;
