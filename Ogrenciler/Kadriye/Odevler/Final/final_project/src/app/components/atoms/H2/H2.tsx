import "./style.scss"
interface Props {
    text: string;
}
const H2 = ({ text }: Props) => {
    return (
        <h2>{text}</h2>
    )
}

export default H2