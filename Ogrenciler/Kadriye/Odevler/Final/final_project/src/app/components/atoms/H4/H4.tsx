import "./style.scss"
interface Props {
    text: string;
    child?: any
}
const H4 = ({ text, child }: Props) => {
    return (
        <h4>{text} {child}</h4>
    )
}

export default H4