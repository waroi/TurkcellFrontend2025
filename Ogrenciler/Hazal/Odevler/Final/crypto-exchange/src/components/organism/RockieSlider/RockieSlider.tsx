import { Image } from "react-bootstrap"

type Props = {
    src: string,
    alt: string,
    width?: number | string,
    height?: number,
    className?: string
}

const RockieSlider = (props: Props) => {
    return (
        <Image src={props.src} loading="lazy" className={props.className} alt={props.alt} width={props.width} height={props.height} />
    )
}

export default RockieSlider