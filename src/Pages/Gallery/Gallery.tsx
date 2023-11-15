import GallerySlider from "../../Components/GallerySlider/GallerySlider";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import { getPosts } from "../../Redux/reducers/postsreducer";
import { useEffect } from "react";

const Gallery = () => {
  const cardsList = useSelector(PostsSelectors.getCardsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  });

  return <GallerySlider cardList={cardsList}></GallerySlider>;
};

export default Gallery;
