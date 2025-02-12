function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === 'string') {
                console.log('Sonuçlar alınıyor...');
                resolve('Data alındı');
            } else {
                console.log('Hata oluştu');
                reject(new Error('Lütfen string bir değer girin'));
            }
        }, 2000);
    });
}

getData('Merhaba').then(response => {
    console.log(response);
}).catch(err => {
    console.error(err);
});