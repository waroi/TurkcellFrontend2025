import H5 from "../../atoms/h5/H5";
import P from "../../atoms/p/P";

const CarouselCaption = ({ head, text }) => {
  return (
    <div className="carousel-caption d-none d-md-block bg-dark text-light bg-opacity-75 rounded p-3 my-3">
      <H5 children={head} />
      <P children={text} />
    </div>
  );
};
export default CarouselCaption;
