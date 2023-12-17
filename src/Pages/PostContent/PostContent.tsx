import React, { useEffect } from "react";
import styles from "./PostContent.module.scss";
import PostsSelectors from "../../Redux/selectors/photosSelectors";
import Lottie from "lottie-react";
import animation from "../../lotties/transfer.json";
import PhotoCard from "../../Components/PhotoCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsPhotos } from "../../Redux/reducers/photosReducer";

const PostContent = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const post = useSelector(PostsSelectors.getAlbumsPhotos);
  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getAlbumsPhotos(id));
    }
  }, [id]);

  return post ? (
    <PhotoCard post={post}></PhotoCard>
  ) : (
    <div className={styles.lottie__container}>
      <Lottie
        className={styles.lottie__container__animation}
        animationData={animation}
        loop={true}
      ></Lottie>
    </div>
  );
};
export default PostContent;
