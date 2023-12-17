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
//
export default {
  getAlbumsList,
  getAlbumPhotos,
  deleteAlbum,
};
