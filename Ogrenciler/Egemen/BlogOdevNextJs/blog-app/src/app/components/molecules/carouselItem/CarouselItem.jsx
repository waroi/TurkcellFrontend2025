import CarouselImage from "../../atoms/ımage/Image";
import CarouselCaption from "../carouselCaption/CarouselCaption";

const CarouselItem = ({ head, text, src, ...props }) => {
  return (
    <div {...props}>
      <CarouselImage src={src} />
      <CarouselCaption head={head} text={text} />
    </div>
  );
};
export default CarouselItem;
