import { useEffect, useState } from "react";

import EventsList from "../../components/EventsList/EventsList";

import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/events/operations";
import {
  selectEvents,
  selectIsEventsLoading,
} from "../../redux/events/selectors.js";
import PagSystem from "../../components/PagSystem/PagSystem.jsx";

const EventsBoardPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents(page));
  }, [dispatch]);

  const fetchedEvents = useSelector(selectEvents).data;

  const isLoading = useSelector(selectIsEventsLoading);

  return (
    <>
      <h1>EventsBoardPage</h1>
      {isLoading ? (
        <p>Wait pls</p>
      ) : (
        <>
          <PagSystem />
          <EventsList fetchedEvents={fetchedEvents} />
        </>
      )}
    </>
  );
};

export default EventsBoardPage;
