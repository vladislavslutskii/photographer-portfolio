import { FC } from "react";
import styles from "./ImageSlider.module.scss";
interface ImagesProps {
  data: {
    src: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className={styles.images_container}>
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className={styles.image}
        >
          <img src={slide.src} alt={slide.description} />
        </div>
      ))}
    </div>
  );
};

export default Images;
