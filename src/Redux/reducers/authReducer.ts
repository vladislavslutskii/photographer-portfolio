import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setUserPayload, UserActionPayload } from "../../Utils/globalTypes";

type AuthStateType = {
  user: setUserPayload | null;
  authStatus: boolean;
};

const INITIAL_STATE: AuthStateType = {
  user: null,
  authStatus: false, //тут мы проверяем - если токен есть - true, иначе false
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    createNewUser: (state, action: PayloadAction<UserActionPayload>) => {},
    getUser: (state, action: PayloadAction<undefined>) => {},
  },
});

export const { createNewUser, getUser } = authSlice.actions;

export default authSlice.reducer;
