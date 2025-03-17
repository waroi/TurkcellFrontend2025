import Image from "next/image";

const CarouselImage = ({ ...props }) => {
  return (
    <Image
      width={500}
      height={600}
      className="d-block w-75 img-fluid mx-auto"
      alt="..."
      {...props}
    ></Image>
  );
};
export default CarouselImage;
