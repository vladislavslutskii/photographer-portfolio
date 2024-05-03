import { create } from "apisauce";
import { UserActionPayload } from "../../Utils/globalTypes";

const API = create({
  baseURL: "http://localhost:3001",
});
const getAlbumsList = () => {
  return API.get("/albums");
};
const getAlbumPhotos = (albumId: string) => {
  return API.get(`photos?albumId=${albumId}`);
};
const deleteAlbum = (id: string | number) => {
  return API.delete(`/albums/${id}/`);
};
const addNewAlbum = (data: any) => {
  return API.post(`/albums/`, data);
};
const createNewUser = (userData: UserActionPayload) => {
  return API.post(`/register/`, userData);
};
// const getCurrentUser = (email: string, password: string) => {
//   return API.get(`/albums/`, [email, password]);
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createNewUser,
  getAlbumsList,
  getAlbumPhotos,
  deleteAlbum,
  addNewAlbum,
};
