import types from "./types";

const { SHOW_ALERT, HIDE_ALERT, SET_ALERT } = types;

const show = () => ({
  type: SHOW_ALERT
});

const hide = () => ({
  type: HIDE_ALERT
});

const set = (payload) => ({
  type: SET_ALERT,
  payload
});

export default { show, hide, set };
