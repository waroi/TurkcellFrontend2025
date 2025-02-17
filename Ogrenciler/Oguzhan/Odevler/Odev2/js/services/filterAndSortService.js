export class FilterSortAndSearch {
    
    static filterByCategory(games, selectedCategory) {
        if (!selectedCategory || selectedCategory === "all") {
            return games;
        }
        return games.filter(game => {
            if (!game.categoryIds) return false;
            return game.categoryIds.some(catId => catId === parseInt(selectedCategory));
        });
    }

   
    static filterByReleaseDate(games, releaseDate) {
        if (!releaseDate) return games;

        const date2020 = new Date('2020-01-01').getTime();

        return games.filter(game => {
            if (!game.releaseDate) return false;

            const gameDate = new Date(game.releaseDate).getTime();

            if (releaseDate === "2020 ve üstü") {
                return gameDate >= date2020;
            } else if (releaseDate === "2020 ve altı") {
                return gameDate < date2020;
            }
            return true;
        });
    }

    
    static searchGames(games, searchTerm, categories) {
        if (!searchTerm) return games;

        searchTerm = searchTerm.toLowerCase().trim();

        return games.filter(game => {

            const gameNameMatch = game.gameName?.toLowerCase().includes(searchTerm);
            const developerMatch = game.developer?.toLowerCase().includes(searchTerm);
            const categoryMatch = game.categoryIds?.some(catId => {
                const category = categories.find(c => c.id === catId?.toString());
                return category?.name.toLowerCase().includes(searchTerm);
            });

            return gameNameMatch || developerMatch || categoryMatch;
        });
    }

    
    static sortGames(games, sortBy) {
        if (!sortBy || !games) return games;

        const sortedGames = [...games];

        switch (sortBy) {
            case 'name-asc':
                return sortedGames.sort((a, b) =>
                    (a.gameName || '').toLowerCase().localeCompare((b.gameName || '').toLowerCase())
                );

            case 'name-desc':
                return sortedGames.sort((a, b) =>
                    (b.gameName || '').toLowerCase().localeCompare((a.gameName || '').toLowerCase())
                );

            case 'release-asc':
                return sortedGames.sort((a, b) => {
                    if (!a.releaseDate) return 1;
                    if (!b.releaseDate) return -1;
                    return new Date(a.releaseDate) - new Date(b.releaseDate);
                });

            case 'release-desc':
                return sortedGames.sort((a, b) => {
                    if (!a.releaseDate) return 1;
                    if (!b.releaseDate) return -1;
                    return new Date(b.releaseDate) - new Date(a.releaseDate);
                });

            default:
                return sortedGames;
        }
    }

    static applyAllFilters(games, categories, { category, releaseDate, searchTerm, sortBy }) {
        let filteredGames = [...games];

        filteredGames = this.filterByCategory(filteredGames, category);
        filteredGames = this.filterByReleaseDate(filteredGames, releaseDate);
        filteredGames = this.searchGames(filteredGames, searchTerm, categories);
        filteredGames = this.sortGames(filteredGames, sortBy);

        return filteredGames;
    }
}