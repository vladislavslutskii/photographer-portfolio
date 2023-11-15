import { create } from "apisauce";

const API = create({
  baseURL: "http://localhost:3003",
});
const getPostsList = () => {
  return API.get("/albums");
};
const getPost = (albumId: string) => {
  return API.get(`/albums/${albumId}/photos`);
};
const deletePost = (albumId: string) => {
  return API.delete(`/albums/${albumId}/photos}`);
};
export default {
  getPostsList,
  getPost,
  deletePost,
};

// return API.delete(`/albums/${albumId}/photos/?photoId=${photoId}`);
