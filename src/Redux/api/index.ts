import { create } from "apisauce";

const API = create({
  baseURL: "http://localhost:3003",
});
const getAlbumsList = () => {
  return API.get("/albums");
};
const getAlbumPhotos = (albumId: string) => {
  return API.get(`/albums/${albumId}/photos/`);
};
const deleteAlbum = (id: string | number) => {
  return API.delete(`/albums/${id}/`);
};
const addNewAlbum = (data: any) => {
  return API.post(`/albums/`, data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAlbumsList,
  getAlbumPhotos,
  deleteAlbum,
  addNewAlbum,
};
