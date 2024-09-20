import { useDispatch, useSelector } from "react-redux";
import NameOfThePage from "../../components/NameOfThePage/NameOfThePage";
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList";
import { useEffect } from "react";
import { fetchParticipants } from "../../redux/participants/operations";
import { selectParticipants } from "../../redux/participants/selectors";
import { useParams } from "react-router-dom";

const EventsParticipantsPage = () => {
  const dispatch = useDispatch();

  const { eventId } = useParams();

  useEffect(() => {
    dispatch(fetchParticipants({ eventId: eventId }));
  }, [dispatch]);

  const fetchedParticipants = useSelector(selectParticipants).data;
  console.log(fetchedParticipants);

  return (
    <>
      <NameOfThePage />
      <ParticipantsList />
    </>
  );
};

export default EventsParticipantsPage;
