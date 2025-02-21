export const getAllUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        return data;
    
};

export const searchUsers = async (query) => {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const data = await response.json();
        return data.items;
    
};

