import { PriceTextProps } from "@/types/PriceTextType"
import { formatCurrency } from "@/utils/formatter"
import React from "react"

const PriceText: React.FC<PriceTextProps> = ({
    value,
    prefix = '$',
    className = 'price'
}) => {
    return (
        <strong className={className}>
            {prefix}{formatCurrency(value)}
        </strong>
    )
}

export default PriceText