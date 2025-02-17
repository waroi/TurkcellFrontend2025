//2 array verisi için standartlaştırma
export const normalizeArrayData = (data, separator = ',', defaultValue = []) => {
    if (Array.isArray(data)) return data;
    return data ? data.split(separator).map(item => item.trim()) : defaultValue;
};
//girilmeyen veriler için varsayılan değer
export const createSystemReq = (gameData) => ({
    os: gameData?.os || "Windows 10",
    processor: gameData?.processor || "Belirtilmedi",
    memory: gameData?.memory || "Belirtilmedi",
    graphics: gameData?.graphics || "Belirtilmedi",
    storage: gameData?.storage || "Belirtilmedi"
});
