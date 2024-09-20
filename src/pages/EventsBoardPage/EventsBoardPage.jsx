import { useEffect } from "react";
import EventsList from "../../components/EventsList/EventsList";
import NameOfThePage from "../../components/NameOfThePage/NameOfThePage";
import axios from "axios";

const EventsBoardPage = () => {
  useEffect(() => {
    async function fetchEvents() {
      const response = await axios.get(
        "https://event-board-b.onrender.com/events"
      );
      console.log(response);
    }
    fetchEvents();
  }, []);
  return (
    <>
      <NameOfThePage />
      <EventsList />
    </>
  );
};

export default EventsBoardPage;
