import { ReactNode } from "react";

export type CardPostType = {
  id: number;
  previewPhotosession: string;
  datePhotosession: string;
};
export type AlbumsListType = Array<CardPostType>;
