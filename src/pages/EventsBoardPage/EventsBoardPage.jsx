import { useEffect, useState } from "react";

import EventsList from "../../components/EventsList/EventsList";

import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/events/operations";
import {
  selectEvents,
  selectIsEventsLoading,
} from "../../redux/events/selectors.js";
import PagSystem from "../../components/PagSystem/PagSystem.jsx";
import Seeder from "../../components/Seeder/Seeder.jsx";
import SorterEvents from "../../components/SorterEvents/SorterEvents.jsx";

import css from "./EventsBoardPage.module.css";

const EventsBoardPage = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("title");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents([page, sort]));
  }, [dispatch, page, sort]);

  const fetchedEvents = useSelector(selectEvents).data;

  const isLoading = useSelector(selectIsEventsLoading);

  function setNextPage() {
    setPage(page + 1);
  }

  function setPrevPage() {
    setPage(page - 1);
  }

  function onChangeP(event) {
    setSort(event.target.value);
  }

  return (
    <div className="page_style">
      <h1>EventsBoardPage</h1>
      {isLoading ? (
        <p>Wait pls</p>
      ) : (
        <>
          <div className="up_menu">
            <PagSystem
              page={page}
              setNextPage={setNextPage}
              setPrevPage={setPrevPage}
            />
            <SorterEvents onChangeP={onChangeP} />
          </div>
          <EventsList fetchedEvents={fetchedEvents} />
          {page != 1 && fetchedEvents.length == 0 && <h2>Go back pls :)</h2>}
          <Seeder />
        </>
      )}
    </div>
  );
};

export default EventsBoardPage;
