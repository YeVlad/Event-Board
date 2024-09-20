import "./App.css";
import { Routes, Route } from "react-router-dom";

import EventsBoardPage from "./pages/EventsBoardPage/EventsBoardPage";
import EventsRegistrationPage from "./pages/EventsRegistrationPage/EventsRegistrationPage";
import EventsParticipantsPage from "./pages/EventsParticipantsPage/EventsParticipantsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventsBoardPage />} />
        <Route
          path="/registration/:eventId"
          element={<EventsRegistrationPage />}
        />
        <Route
          path="/participants/:eventId"
          element={<EventsParticipantsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
