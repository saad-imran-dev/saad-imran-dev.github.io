import types from "./types";

const { SHOW_LOADING, HIDE_LOADING, SET_LOADING } = types;

const show = () => ({
  type: SHOW_LOADING
});

const hide = () => ({
  type: HIDE_LOADING
});

const set = (payload) => ({
  type: SET_LOADING,
  payload
});

export default { show, hide, set };
