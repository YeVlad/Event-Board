import { useEffect } from "react";

import EventsList from "../../components/EventsList/EventsList";

import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/events/operations";
import {
  selectEvents,
  selectIsEventsLoading,
  selectErrorEvents,
} from "../../redux/events/selectors.js";

const EventsBoardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const fetchedEvents = useSelector(selectEvents).data;

  const isLoading = useSelector(selectIsEventsLoading);
  const isError = useSelector(selectErrorEvents);

  return (
    <>
      <h1>EventsBoardPage</h1>
      {isLoading ? (
        <p>Wait pls</p>
      ) : (
        <EventsList fetchedEvents={fetchedEvents} />
      )}
    </>
  );
};

export default EventsBoardPage;
