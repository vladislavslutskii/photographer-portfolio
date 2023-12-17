import { combineReducers } from "@reduxjs/toolkit";

import themeReducer from "./themeReducer";
import photosReducer from "./photosReducer";

const reducer = combineReducers({
  themeReducer,
  photosReducer,
});

export default reducer;
