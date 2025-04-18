import Input from "../Input/Input"

type SwitchProps = {
    checked: boolean,
    id: string
}

const Switch = ({ checked, id }: SwitchProps) => {
    return (
        <div className="form-check form-switch">
            <Input
                checked={checked}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={id || "switchCheckChecked"}
            />
        </div>
    )
}

export default Switch