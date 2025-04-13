interface ButtonItemProbs {
    text: string;
}

const ButtonItem = ({ text }: ButtonItemProbs) => {
    return (
        <button type="button">{text}</button>
    )
}

export default ButtonItem