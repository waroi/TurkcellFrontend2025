import Image from "next/image"

interface ImageItemProbs {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const ImageItem = ({ src, width, height, alt, ...props }: ImageItemProbs) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
}

export default ImageItem