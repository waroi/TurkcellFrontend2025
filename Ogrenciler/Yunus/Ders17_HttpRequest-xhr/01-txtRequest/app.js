document.getElementById('veri').addEventListener('click', function () {
    // XMLHttpRequset
    const xhr = new XMLHttpRequest() // xmlhttprequest objesi oluşturduk
    console.log(xhr)
    // xhr.onreadystatechange = function () {
    //     console.log(this.readyState)
    //     if (this.readyState === 4 && this.status === 200) {
    //         console.log(this.response)
    //         console.log(this.responseText)
    //     }
    //     if (this.readyState === 4 && this.status === 404) console.error('Bir hata var, veri alınamadı!')
    // }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
    }


    xhr.open('GET', 'veri.txt', true) // default true asenkron olup olmadığını soruyor
    xhr.send()
})