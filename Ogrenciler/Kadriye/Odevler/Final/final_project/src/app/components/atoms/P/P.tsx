import "./style.scss"
interface Props {
    text: string;
    child?: any;
}
const P = ({ text, child }: Props) => {
    return (
        <p>{text}{child}</p>
    )
}

export default P