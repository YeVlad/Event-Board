import { useDispatch, useSelector } from "react-redux";
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList";
import { useEffect } from "react";
import { fetchParticipants } from "../../redux/participants/operations";
import {
  selectParticipants,
  selectAreParticipantLoading,
} from "../../redux/participants/selectors";
import { useParams } from "react-router-dom";

const EventsParticipantsPage = () => {
  const dispatch = useDispatch();

  const { eventId } = useParams();

  useEffect(() => {
    dispatch(fetchParticipants(eventId));
  }, [dispatch]);

  const fetchedParticipants = useSelector(selectParticipants).data;

  const isLoading = useSelector(selectAreParticipantLoading);
  return (
    <>
      <h1>EventsParticipantsPage</h1>
      {isLoading ? (
        <p>Wait pls</p>
      ) : (
        <ParticipantsList fetchedParticipants={fetchedParticipants} />
      )}
    </>
  );
};

export default EventsParticipantsPage;
