const helpers = {
   formatDate(dateString) {
       return new Date(dateString).toLocaleDateString('tr-TR');
   },

   debounce(func, wait) {
       let timeout;
       return function executedFunction(...args) {
           const later = () => {
               clearTimeout(timeout);
               func(...args);
           };
           clearTimeout(timeout);
           timeout = setTimeout(later, wait);
       };
   },

   sortGames(games, sortBy) {
       return [...games].sort((a, b) => {
           switch (sortBy) {
               case 'nameAsc':
                   return a.name.localeCompare(b.name);
               case 'nameDesc':
                   return b.name.localeCompare(a.name);
               case 'dateAsc':
                   return new Date(a.releaseDate) - new Date(b.releaseDate);
               case 'dateDesc':
                   return new Date(b.releaseDate) - new Date(a.releaseDate);
               default:
                   return 0;
           }
       });
   }
};
