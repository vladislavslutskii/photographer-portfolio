export default {
  getAlbumsList: (state: any) => state.photosReducer.albumsList,
  getAlbumsPhotos: (state: any) => state.photosReducer.albumsPhotos,
  getModalAddAlbumVisible: (state: any) =>
    state.photosReducer.albumModalVisible,
};
