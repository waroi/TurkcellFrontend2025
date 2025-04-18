import Icon from '@/components/atoms/Icons/Icons';
import React from 'react';

interface FavoriteButtonProps {
    isFavorite: boolean
    onClick: () => void
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick }) => {
    return (
        <button
            className="bg-transparent favorite-button"
            onClick={onClick}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
            <Icon
                collection="ci"
                name="CiStar"
                className={isFavorite ? "text-warning" : "text-secondary"}
                size={20}
            />
        </button>
    )
}

export default FavoriteButton