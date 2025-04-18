import Image from "next/image"
import React from "react"

export interface CoinImageProps {
    src: string
    alt: string
    size?: number
}
const CoinImage: React.FC<CoinImageProps> = ({ src, alt, size = 23 }) => {
    return (
        <Image
            loading="lazy"
            width={size}
            height={size}
            src={src}
            alt={alt}
            className="coin-image"
        />
    )
}

export default CoinImage