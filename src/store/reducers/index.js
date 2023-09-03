import { combineReducers } from "@reduxjs/toolkit";
import alert from "./alert.reducer";
import loading from "./loading.reducer";

const rootReducer = combineReducers({
  alert,
  loading
});

export default rootReducer;
