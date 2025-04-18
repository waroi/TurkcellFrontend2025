import Image from "next/image"

interface ImageItemProbs {
  src: string;
  width: number;
  height: number;
  alt: string;
  classProp?: string
}

const ImageItem = ({ src, width, height, alt, classProp }: ImageItemProbs) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classProp}
    />
  )
}

export default ImageItem