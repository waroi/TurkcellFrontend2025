'use client'

import * as Fa from 'react-icons/fa'
import * as Ai from 'react-icons/ai'
import * as Bs from 'react-icons/bs'
import * as Md from 'react-icons/md'
import * as Ci from 'react-icons/ci'

import { InputProps } from '@/types/InputProps'

const Input = ({
    iconName,
    checked,
    iconSize = 14,
    iconColor = '#B1B5C3',
    placeholder = '',
    value,
    role,
    onBlur,
    onChange,
    type = 'text',
    className = '',
    inputClassName = '',
    iconCollection = 'fa',
    disabled,
    name,
    id
}: InputProps) => {
    const hasIcon = Boolean(iconName)

    const renderIcon = () => {
        if (!iconName) return null

        let IconCollections: any = {
            'fa': Fa,
            'ai': Ai,
            'bs': Bs,
            'md': Md,
            'ci': Ci
        }

        const SelectedCollection = IconCollections[iconCollection]
        const IconComponent = SelectedCollection[iconName]

        if (IconComponent) {
            return <IconComponent size={iconSize} color={iconColor} />
        }

        return null + "Inputta bir hata :)"
    };

    if (hasIcon) {
        return (
            <div className={`input-group ${className}`}>
                <span className="input-group-text bg-white border-end-0">
                    {renderIcon()}
                </span>
                <input
                    id={id}
                    type={type}
                    disabled={disabled}
                    name={name}
                    onBlur={onBlur}
                    checked={checked}
                    role={role}
                    className={`form-control border-start-0 ${inputClassName}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }

    return (
        <input
            id={id}
            type={type}
            checked={checked}
            name={name}
            onBlur={onBlur}
            role={role}
            disabled={disabled}
            className={`form-control ${className} ${inputClassName}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input