import { combineReducers } from "redux";
import EventsReducer from "./EventsReducer";

export default combineReducers({
  event: EventsReducer
});
