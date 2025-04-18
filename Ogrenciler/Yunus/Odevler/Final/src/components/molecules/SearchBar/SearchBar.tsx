import React from 'react';
import Input from '@/components/atoms/Input/Input';

interface SearchBarProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    placeholder = "Search Coin",
    className = "marketcap-search"
}) => {
    return (
        <div className={className}>
            <Input
                placeholder={placeholder}
                className="marketcap-search-input"
                inputClassName="pe-5 rounded-pill"
                iconName="CiSearch"
                iconCollection="ci"
                iconSize={18}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBar