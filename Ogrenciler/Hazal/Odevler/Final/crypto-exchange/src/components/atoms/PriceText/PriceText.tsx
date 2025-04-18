import { formatCurrency } from "@/utils/formatters"
import React from "react"

export interface PriceTextProps {
    value: number | string
    prefix?: string;
    className?: string
}
const PriceText: React.FC<PriceTextProps> = ({
    value,
    prefix = '$',
    className = 'price'
}) => {
    return (
        <strong className={className}>
            {prefix}{formatCurrency(Number(value))}
        </strong>
    )
}

export default PriceText