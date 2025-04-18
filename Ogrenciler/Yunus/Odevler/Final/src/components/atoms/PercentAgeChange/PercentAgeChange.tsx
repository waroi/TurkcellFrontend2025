interface PercentageChangeProps {
    value: number
    className?: string
}

const PercentageChange: React.FC<PercentageChangeProps> = ({ value, className }) => {
    const isPositive = value > 0
    const colorClass = isPositive ? 'text-success' : 'text-danger'

    return (
        <span className={`${colorClass} ${className || ''}`}>
            {value}%
        </span>
    )
}
export default PercentageChange