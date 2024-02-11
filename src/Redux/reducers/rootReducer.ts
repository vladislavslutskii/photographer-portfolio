import { combineReducers } from "@reduxjs/toolkit";

import themeReducer from "./themeReducer";
import photosReducer from "./photosReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
  themeReducer,
  photosReducer,
  authReducer,
});

export default reducer;
