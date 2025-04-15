import "./style.scss"
interface Props {
    text: string;
}
const H1 = ({ text }: Props) => {
    return (
        <h1>{text}</h1>
    )
}

export default H1