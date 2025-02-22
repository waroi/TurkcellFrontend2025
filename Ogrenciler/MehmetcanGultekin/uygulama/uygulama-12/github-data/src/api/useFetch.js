export const getAllUsers = async (query) => {
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const data = await response.json();
        console.log(data);
        return data;
    
};

export const getOneUser = async (username) => {
        const response = await fetch(`https://api.github.com/search/users/${username}`);
        const data = await response.json();
        console.log(data);
        return data;
    
};





