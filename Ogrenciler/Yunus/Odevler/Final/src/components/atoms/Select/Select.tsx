'use client';

import React from 'react';

interface SelectProps {
    id?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
    label: string;
    className?: string;
}

const Select = ({ id, value, onChange, children, label, className = '' }: SelectProps) => {
    return (
        <div className="relative inline-block w-40">
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={`${className} border-0 bg-transparent`}
                aria-label={label}
            >
                {children}
            </select>
        </div>
    );
};

export default Select;