import React, { useState } from "react";
import styles from "./ModalAddAlbum.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ModalWindow from "../../../../Components/ModalWindow/ModalWindow";
import {
  addNewAlbum,
  setModalAddAlbumVisible,
} from "../../../../Redux/reducers/photosReducer";
import ImageUploading, { ImageListType } from "react-images-uploading";
import PhotosSelectors from "../../../../Redux/selectors/photosSelectors";
import { Cross, Image, Upload } from "../../../../Assets/Icons";
import classNames from "classnames";

const ModalAddAlbum = () => {
  const isVisible = useSelector(PhotosSelectors.getModalAddAlbumVisible);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setModalAddAlbumVisible(!isVisible));
  };

  const [images, setImages] = useState<ImageListType>([]);
  // console.log(images[0].file);
  const onImageChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  const onSaveAlbum = () => {
    const formData = new FormData();
    formData.append("image", images[0].file as Blob);
    console.log(formData);
    dispatch(addNewAlbum({ formData }));
  };

  return (
    <ModalWindow active={isVisible} closeModal={onClose}>
      <div className={styles.modal}>
        <ImageUploading value={images} onChange={onImageChange}>
          {({
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className={styles.uploadPhotos} {...dragProps}>
              {images.length === 0 ? (
                <button
                  className={styles.uploadPhotos_button}
                  onClick={onImageUpload}
                >
                  <Upload width={150} height={150}></Upload>
                  <div className={styles.uploadPhotos_button_text}>
                    {isDragging
                      ? "Drop here please"
                      : "Drag and drop your file here"}
                  </div>
                </button>
              ) : null}
              {images.map((image, index) => (
                <div key={index} className={styles.uploadPhotos_imageContainer}>
                  <div className={styles.imageContainer_header}>
                    <div className={styles.imageContainer_header_leftSide}>
                      <Image width={30} height={30}></Image>
                      <div
                        className={styles.imageContainer_header_leftSide_text}
                      >
                        {image.dataURL}
                      </div>
                    </div>
                    <button
                      className={
                        styles.uploadPhotos_imageContainer_cancelButton
                      }
                      onClick={() => onImageRemove(index)}
                    >
                      <Cross width={25} height={25}></Cross>
                    </button>
                  </div>
                  <img
                    className={styles.imageContainer_image}
                    src={image.dataURL}
                    alt=""
                  />

                  <div className={styles.imageContainer_footer}>
                    <button
                      className={styles.imageContainer_footer_updateButton}
                      onClick={() => onImageUpdate(index)}
                    >
                      Изменить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <button
          className={styles.imageContainer_footer_upLoadButton}
          onClick={() => onSaveAlbum}
        >
          Отправить
        </button>
      </div>
    </ModalWindow>
  );
};
export default ModalAddAlbum;
