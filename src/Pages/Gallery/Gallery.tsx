import { useEffect } from "react";
import classNames from "classnames";
import styles from "./Gallery.module.scss";
import GallerySlider from "../../Components/GallerySlider/GallerySlider";
import PhotosSelectors from "../../Redux/selectors/photosSelectors";
import ModalAddAlbum from "./components/PostModalImg";
import { useDispatch, useSelector } from "react-redux";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { getAlbumsList } from "../../Redux/reducers/photosReducer";

const Gallery = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const albumsList = useSelector(PhotosSelectors.getAlbumsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumsList());
  }, []);

  return (
    <div
      className={classNames(styles.galleryWrap, {
        [styles.galleryWrap_dark]: isDarkTheme,
      })}
    >
      <ModalAddAlbum></ModalAddAlbum>
      <GallerySlider albumsList={albumsList}></GallerySlider>
    </div>
  );
};

export default Gallery;
