const FavoriteStar = ({ coinId, favorites }: { coinId: string; favorites: string[] }) => {
    const isFavorite = favorites.includes(coinId);

    return (
        <span>
            <i className={`fa-star fa-lg ${isFavorite ? 'fas text-warning' : 'far text-secondary'}`} />
        </span>
    );
};
export default FavoriteStar;