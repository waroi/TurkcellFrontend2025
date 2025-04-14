import "./style.scss"
interface Props {
    text: string;
}
const P = ({ text }: Props) => {
    return (
        <p>{text}</p>
    )
}

export default P