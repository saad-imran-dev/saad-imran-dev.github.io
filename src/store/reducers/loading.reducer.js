import types from "../actions/types";

const { SHOW_LOADING, HIDE_LOADING, SET_LOADING } = types;

const initialState = {
  show: false,
  msg: ""
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        show: true
      };

    case HIDE_LOADING:
      return {
        ...state,
        show: false
      };

    case SET_LOADING:
      return {
        ...state,
        msg: action.payload
      };

    default:
      return state;
  }
}
