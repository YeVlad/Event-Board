import { useEffect } from "react";

import EventsList from "../../components/EventsList/EventsList";
import NameOfThePage from "../../components/NameOfThePage/NameOfThePage";
import axios from "axios";

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
  // console.log(fetchedEvents);

  const isLoading = useSelector(selectIsEventsLoading);
  return (
    <>
      <NameOfThePage />
      {isLoading ? (
        <p>Wair pls</p>
      ) : (
        <EventsList fetchedEvents={fetchedEvents} />
      )}
    </>
  );
};

export default EventsBoardPage;
