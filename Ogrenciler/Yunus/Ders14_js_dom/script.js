// dom = document object model

let value;

value = document
value = document.URL
value = document.title
value = document.location
value = document.location.hostname
value = document.links
value = document.links[document.links.length - 1].getAttribute('class')
value = document.scripts[0]


// ID'le seçme

value = document.getElementById('title').innerHTML
document.getElementById('title').innerHTML = 'Merhaba Atmosware :D'
document.getElementById('title').innerHTML = '<p>Merhaba Atmosware :DD</p>'

// Class'la seçme

value = document.getElementsByClassName('text')


// Tag ile seçme

value = document.getElementsByTagName('a')

// QuerySelector ile seçme

value = document.querySelector('#title')
value = document.querySelector('.text')
value = document.querySelector('p')

// Element Oluşturma

value = document.getElementById('box')

const button = document.createElement('a')
button.id = 'yeniButton'
button.className = 'btn btn-success'
button.href = 'https://yunusorak.com'
button.target = '_blank'
const text = document.createTextNode('Siteme Git -->')
button.appendChild(text)
value.appendChild(button)


value = document.getElementById('box')
value.addEventListener('click', testFunction)

function testFunction() {

    console.log('Tıklandı')
}

const textInput = document.getElementById('text-input')
textInput.addEventListener('keyup', () => console.log('up -->' + textInput.value))
// textInput.addEventListener('keydown', () => console.log('down -->' + textInput.value))
// textInput.addEventListener('focus', () => textInput.value = '')
textInput.addEventListener('blur', () => textInput.value = '')

console.log(value)