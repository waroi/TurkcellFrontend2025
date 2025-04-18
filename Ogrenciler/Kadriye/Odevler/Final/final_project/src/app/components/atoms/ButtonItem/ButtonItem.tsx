"use client"
import ImageItem from "../ImageItem/ImageItem";

interface ButtonItemProbs {
    type?: any;
    text?: string;
    src?: string;
    width?: number;
    height?: number;
    alt?: string;
    classProps?: string;
    event?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonItem = ({ type = "button", text, src, width = 0, height = 0, alt = "", classProps = "", event }: ButtonItemProbs) => {
    return (
        <button type={type} className={classProps} onClick={event}>{text} {src ? <ImageItem src={src} width={width} height={height} alt={alt} /> : <></>} </button>
    )
}

export default ButtonItem