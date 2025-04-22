
import { useField } from "formik";

export const Input = ({ label, name, type = "text", placeholder = "" }) => {
    return (
        <>
            <label htmlFor="name">{label}</label>
            <input type={type} placeholder={placeholder} name={name} />
        </>
    )
}
