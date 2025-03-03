export class Storage {
    static setStorage(data) {
        localStorage.setItem('cachedNews', JSON.stringify(data));
    }
}