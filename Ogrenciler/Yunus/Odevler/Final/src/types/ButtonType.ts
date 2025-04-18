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