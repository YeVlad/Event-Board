import { useDispatch, useSelector } from "react-redux";
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList";
import { useEffect, useState } from "react";
import { fetchParticipants } from "../../redux/participants/operations";
import {
  selectParticipants,
  selectAreParticipantLoading,
} from "../../redux/participants/selectors";
import { useParams } from "react-router-dom";
import FilterPeople from "../../components/FilterPeople/FilterPeople";

const EventsParticipantsPage = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const { eventId } = useParams();

  useEffect(() => {
    dispatch(fetchParticipants(eventId));
  }, [dispatch]);

  const fetchedParticipants = useSelector(selectParticipants).data;

  const isLoading = useSelector(selectAreParticipantLoading);

  function changeFilter(event) {
    setFilter(event.target.value);
  }

  return (
    <>
      <h1>EventsParticipantsPage</h1>
      <FilterPeople changeFilter={changeFilter} />
      {isLoading ? (
        <p>Wait pls</p>
      ) : (
        <ParticipantsList
          fetchedParticipants={fetchedParticipants}
          filter={filter}
        />
      )}
    </>
  );
};

export default EventsParticipantsPage;
