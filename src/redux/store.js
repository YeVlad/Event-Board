import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./events/slice.js";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});
