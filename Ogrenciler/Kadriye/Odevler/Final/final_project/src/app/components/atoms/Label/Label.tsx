const Label = ({ id, title }: { id: string, title: string }) => {
    return (
        <label htmlFor={`${id}`}>{title}</label>
    )
}

export default Label