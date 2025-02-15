// Promise nedir?
// öğrenip yazılacak


function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === 'string') {
                console.log('Sonuç olumlu, data alındı')
                resolve('Data alındı')
            } else {
                console.warn('Sonuç olumsuz, data alınamadı')
                reject('Data alınamadı')
            }
        }, 2000); // ms cinsinden yani 2s 
    })
}

getData('Merhaba')
    .then(response => {
        console.log(response)
    }).catch(err => console.log(err))

getData(34242)
    .then(response => {
        console.log(response)
    }).catch(err => console.log(err))