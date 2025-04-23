import React from 'react';

interface InputProps {
    label?: string;
    name: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    label = "",
    name,
    type = 'text',
    placeholder = '',
    className = ''
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                name={name}
                className={className}
            />
        </>
    );
};