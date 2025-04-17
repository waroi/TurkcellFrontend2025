import "./style.scss"
const Input = ({ placeholder, type = "text", classProp, id }: { placeholder: string, type?: string, classProp?: string, id: string }) => {
    return (
        <input id={id} name={id} type={type} placeholder={placeholder} className={classProp} required />
    )
}

export default Input