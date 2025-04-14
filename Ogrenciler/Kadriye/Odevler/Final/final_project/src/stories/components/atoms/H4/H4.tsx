import "./style.scss"
interface Props {
    text: string;
}
const H4 = ({ text }: Props) => {
    return (
        <h4>{text}</h4>
    )
}

export default H4