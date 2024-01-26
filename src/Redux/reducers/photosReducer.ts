import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumsListType } from "../../Utils/globalTypes";

type PostStateType = {
  albumsList: AlbumsListType | [];
  albumsPhotos: any | null;
  albumModalVisible: boolean;
};

const INITIAL_STATE: PostStateType = {
  albumsList: [],
  albumsPhotos: null,
  albumModalVisible: false,
};

const photosReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    getAlbumsList: (state, action: PayloadAction<undefined>) => {},
    setAlbumsList: (state, action: PayloadAction<AlbumsListType>) => {
      state.albumsList = action.payload;
    },
    getAlbumsPhotos: (state, action: PayloadAction<string>) => {},
    setAlbumsPhotos: (state, action: PayloadAction<any>) => {
      state.albumsPhotos = action.payload;
    },
    deleteAlbum: (state, action: PayloadAction<any>) => {},
    addNewAlbum: (state, action: PayloadAction<any>) => {},
    setModalAddAlbumVisible: (state, action: PayloadAction<boolean>) => {
      state.albumModalVisible = action.payload;
    },
  },
});

export default photosReducer.reducer;

export const {
  getAlbumsList,
  setAlbumsList,
  getAlbumsPhotos,
  setAlbumsPhotos,
  deleteAlbum,
  addNewAlbum,
  setModalAddAlbumVisible,
} = photosReducer.actions;
