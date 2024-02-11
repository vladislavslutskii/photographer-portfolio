import { ReactNode } from "react";

export type CardPostType = {
  id: number;
  previewPhotosession: string;
  datePhotosession: string;
};
export type AlbumsListType = Array<CardPostType>;

export type setUserPayload = {
  name: string;
  id: number;
  email: string;
  password: string;
};
export type UserActionPayload = {
  name: string;
  password: string;
  email: string;
};
