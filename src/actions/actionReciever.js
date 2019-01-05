import {
  ADD_EVENT,
  GET_EVENTS,
  STAGE_EVENT,
  DELETE_EVENT,
  DELETE_EVENT2,
  CHECKTOUPDATE_EVENT,
  CHECKTOUPDATE_EVENT2,
  UPDATE_EVENT,
  UPDATE_EVENT2,
  ADD_IMAGES,
  STAGE_EVENT2,
  ADD_EVENT2
} from "./actionTypes";

export const checkToUpdateEvent2 = boolCheck => {
  return {
    type: CHECKTOUPDATE_EVENT2,
    payload: boolCheck
  };
};

export const addEvent2 = event => {
  return {
    type: ADD_EVENT2,
    payload: event
  };
};

export const showEvent2 = event => {
  return {
    type: STAGE_EVENT2,
    payload: event
  };
};

export const addImages = images => {
  return {
    type: ADD_IMAGES,
    payload: images
  };
};
export const addEvent = event => {
  return {
    type: ADD_EVENT,
    payload: event
  };
};

export const updateEvent2 = event => {
  return {
    type: UPDATE_EVENT2,
    payload: event
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: event
  };
};
export const checkToUpdateEvent = boolCheck => {
  return {
    type: CHECKTOUPDATE_EVENT,
    payload: boolCheck
  };
};
export const getEvents = () => {
  return {
    type: GET_EVENTS
  };
};
export const deleteEvent = id => {
  return {
    type: DELETE_EVENT,
    payload: id
  };
};

export const deleteEvent2 = id => {
  return {
    type: DELETE_EVENT2,
    payload: id
  };
};
export const showEvent = event => {
  return {
    type: STAGE_EVENT,
    payload: event
  };
};
