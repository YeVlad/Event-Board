import ParticipantComponent from "../ParticipantComponent/ParticipantComponent ";

import css from "./ParticipantsList.module.css";
const ParrticipantsList = ({ fetchedParticipants }) => {
  if (!fetchedParticipants || fetchedParticipants.length === 0) {
    return;
  }

  return (
    <ul>
      {fetchedParticipants.map((part) => {
        return (
          <li key={part._id}>
            <ParticipantComponent
              id={part._id}
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
