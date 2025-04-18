import "./style.scss"
const Input = ({ placeholder, type = "text", classProp, id, required = true }: { placeholder: string, type?: string, classProp?: string, id: string, required?: boolean }) => {
    return (
        <input id={id} name={id} type={type} placeholder={placeholder} className={classProp} required={required} />
    )
}

export default Input