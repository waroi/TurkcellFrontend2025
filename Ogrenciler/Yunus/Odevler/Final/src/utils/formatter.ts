export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat().format(Number(value))
}