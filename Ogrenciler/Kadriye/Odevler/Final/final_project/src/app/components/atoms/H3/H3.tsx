import "./style.scss"
interface Props {
    text: string;
}
const H3 = ({ text }: Props) => {
    return (
        <h3>{text}</h3>
    )
}

export default H3