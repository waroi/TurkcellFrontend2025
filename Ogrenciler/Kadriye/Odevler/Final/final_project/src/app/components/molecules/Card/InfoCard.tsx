import "./style.scss"
import H4 from "../../atoms/H4/H4";
import ImageItem from "../../atoms/ImageItem/ImageItem"
import P from "../../atoms/P/P";

interface Probs {
    src: string;
    alt: string;
    step: string;
    title: string;
    text: string;
}

const InfoCard = ({ src, alt, step, title, text }: Probs) => {

    return (
        <div className="info-card">
            <ImageItem src={`/assets/images/${src}.png`} width={96} height={96} alt={alt} />
            <sup>{step}</sup>
            <H4 text={title}></H4>
            <P text={text}></P>
        </div>
    )
}

export default InfoCard