import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardListType } from "../../Utils/globalTypes";

type PostStateType = {
  cardsList: CardListType | [];
  singlePost: any | null;
};

const INITIAL_STATE: PostStateType = { cardsList: [], singlePost: null };

const postsReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    getPosts: (state, action: PayloadAction<undefined>) => {},
    setCardsList: (state, action: PayloadAction<CardListType>) => {
      state.cardsList = action.payload;
    },
    setSinglePost: (state, action: PayloadAction<any>) => {
      state.singlePost = action.payload;
    },
    getSinglePost: (state, action: PayloadAction<string>) => {},
    deletePost: (state, action: PayloadAction<any>) => {},
  },
});

export default postsReducer.reducer;

export const {
  getPosts,
  setCardsList,
  setSinglePost,
  getSinglePost,
  deletePost,
} = postsReducer.actions;
