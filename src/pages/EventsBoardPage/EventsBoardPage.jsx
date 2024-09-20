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
  }, [dispatch, page]);

  const fetchedEvents = useSelector(selectEvents).data;

  const isLoading = useSelector(selectIsEventsLoading);

  function setNextPage() {
    setPage(page + 1);
  }

  function setPrevPage() {
    setPage(page - 1);
  }

  return (
    <>
      <h1>EventsBoardPage</h1>
      {isLoading ? (
        <p>Wait pls</p>
      ) : (
        <>
          <PagSystem
            page={page}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
          />
          <EventsList fetchedEvents={fetchedEvents} />
          {page != 1 && fetchedEvents.length == 0 && <h2>Go back pls :)</h2>}
        </>
      )}
    </>
  );
};

export default EventsBoardPage;
