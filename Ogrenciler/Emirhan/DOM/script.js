value = document.getElementById('myClass')
const button = document.createElement('a')
button.id = 'myButton'
button.className = 'btn btn-primary'
button.href = 'emirkrhan.com'
button.target = '_blank'

const text = document.createTextNode('Portfolyo incele')
button.appendChild(text)
value.appendChild(button)

button.addEventListener('click', () => console.log('Tıklandı!'))
