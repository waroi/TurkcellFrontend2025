"use client"

import React from 'react'
import './Button.scss'


export type ButtonProps = {
    variant: 'primary-button' | 'secondary-button' | 'swipe-button' | 'temp-button' | 'trade-button' | 'tab-button' | 'cancel-button'
    fontSize: 'lg' | 'md' | 'sm' | 'xs'
    height: 24 | 28 | 32 | 35 | 40 | 44 | 48 | 56 | 64
    className?: string
    children: React.ReactNode
    onClick?: () => void
    isActive?: boolean
    type?: "submit" | "reset" | "button"
}

const Button: React.FC<ButtonProps> = ({
    variant,
    className = '',
    children,
    onClick,
    fontSize,
    height,
    isActive,
    type
}) => {
    return (
        <button type={type}
            onClick={onClick}
            className={`${variant} btn-h-${height} btn-${fontSize} ${className} ${className.includes('tab-button') && isActive ? 'active' : ''}`}>
            {variant === 'swipe-button' && (
                <span className="swipe-icon">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            )}
            {children}
        </button>
    )
}

export default Button