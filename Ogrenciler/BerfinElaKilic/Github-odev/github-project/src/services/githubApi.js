const token = "11AJR34HI0KlKYdlkvMe8U_RzhxgMaq9CT7iB48cSFuKm1uR3yQnTnMaaxccYpm3kCSIFW6O2FM1YekWBM";
const baseUrl = "https://api.github.com/users/";
const headers = {
    Authorization: `token github_pat_${token}`,
}
export const fetchProfile = async (userName) => {
    try {
        const response = await fetch(`${baseUrl}${userName}`, {
            method: "GET",
            headers
        });
        if (!response.ok) {
            return console.log("Profil verileri alınamadı");
        }
        return await response.json();
    } catch (error) {
        return console.log("error", error);
    }
};
export const fetchRepos = async (userName) => {
    try {
        const response = await fetch(`${baseUrl}${userName}/repos`, {
            method: "GET",
            headers,
        });
        if (!response.ok) {
            return console.log("Repo verileri alınamadı");
        }
        return await response.json();
    } catch (error) {
        return console.log("error", error);
    }
};