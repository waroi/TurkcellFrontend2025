import { H } from "vitest/dist/chunks/reporters.d.CfRkRKN2.js";
import ImageItem from "../ImageItem/ImageItem";

interface ButtonItemProbs {
    text?: string;
    src?: string;
    width?: number;
    height?: number;
    alt?: string;
    classProps?: string;
}

const ButtonItem = ({ text, src, width = 0, height = 0, alt = "", classProps = "" }: ButtonItemProbs) => {
    return (
        <button type="button" className={classProps}>{text} {src ? <ImageItem src={src} width={width} height={height} alt={alt} /> : <></>} </button>
    )
}

export default ButtonItem