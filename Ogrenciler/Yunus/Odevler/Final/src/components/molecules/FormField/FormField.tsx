import React from "react";
import Input from "@/components/atoms/Input/Input";

type FormFieldProps = {
    id?: string | undefined
    label?: string
    type?: string
    placeholder?: string
    value?: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: any
    touched?: any
    criticalMessage?: string
    className?: string
    children?: React.ReactNode,
    disabled?: any,
    labelClass?: string
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    type = "text",
    placeholder,
    disabled,
    value,
    onChange,
    error,
    labelClass,
    touched,
    criticalMessage,
    className = "",
    children,
}) => {

    const hasError = error ? !!error : false
    const isTouched = touched ? touched : false

    return (
        <div className={`form-box ${id === "password" ? "passwordField" : ""}`}>
            {label && <label htmlFor={id} className={`form-label ${labelClass}`}>
                {label}
                {criticalMessage && (
                    <span className="critical-message text-danger"> {criticalMessage}</span>
                )}
            </label>}
            <div className={`input-group ${className}`}>
                {children || (
                    <Input
                        id={id}
                        type={type}
                        className="form-control-lg"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                )}
            </div>
            {isTouched && hasError && (
                <div className="text-danger mt-1">
                    {error}
                </div>
            )}
        </div>
    )
}

export default FormField