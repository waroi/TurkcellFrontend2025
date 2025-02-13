function getData (data) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      if (typeof data === 'string') {
        console.log('Sonuç olumlu')
        res('Data alındı!')
      } else {
        console.log('Sonuç olumsuz')
        rej('Data olumsuz!')
      }
    }, 100)
  })
}
getData('Merhaba')
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })
