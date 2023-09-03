import types from "../actions/types";

const { SHOW_ALERT, HIDE_ALERT, SET_ALERT } = types;

const initialState = {
  show: false,
  alert: ""
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        show: true
      };

    case HIDE_ALERT:
      return {
        ...state,
        show: false
      };

    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };

    default:
      return state;
  }
}
