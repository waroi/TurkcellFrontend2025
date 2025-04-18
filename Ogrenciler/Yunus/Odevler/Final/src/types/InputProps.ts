export type InputProps = {
    iconName?: string
    iconSize?: number | string
    iconColor?: string
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    className?: string
    checked?: boolean
    inputClassName?: string
    role?: string
    iconCollection?: 'fa' | 'ai' | 'bs' | 'md' | 'ci'
    id?: string,
    disabled?: boolean,
    name?: string,
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
}