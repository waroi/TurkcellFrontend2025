button = document.getElementById('aTag')


button.id = 'btn'
button.className = 'btn'
button.href = 'https://www.google.com'
const text = document.createTextNode('Go to Google')
button.appendChild(text)
value.appendChild(button)

button.addEventListener('click', click)

function click() {
    console.log('clicked')
}
