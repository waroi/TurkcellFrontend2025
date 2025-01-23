// String Methodları

let value;
const firstName = 'Yunus'
const lastName = 'Orak'
const age = 23
const jobs = 'student'

value = firstName + ' ' + lastName

value = firstName + ''

value += lastName

value = firstName.length
value = firstName.toLocaleLowerCase()
value = firstName.toUpperCase()
value = firstName[0] // ilk eleman
value = firstName[firstName.length - 1] // sonuncu harf
value = firstName.indexOf('a') // yoksa -1
value = firstName.includes('a') // true veya false döner
value = firstName.slice(0, 2) // 0.indexten başla 2 tane al
value = firstName.concat(' ', lastName, " ", age) // birleştime yapar

value = "isim: " + firstName + '\nSoyisim ' + lastName + "\nYaş" + age // \n alt satıra geçirir


// Template Literal ** çok önemli
value = `İsim: ${firstName},
Soyisim: ${lastName},
Yaş: ${age},
İş: ${jobs}
`

value = `<ul>
<li>Ad: ${firstName}</li>
<li>Soyad: ${lastName}</li>
<li>Yaş: ${age}</li>
<li>Meslek: ${jobs}</li>
</ul>`

document.body.innerHTML = value


// Kullanıcıdan bilgi alma
// value = prompt('Lütfen değeri giriniz: ')


value = `${firstName[0].toUpperCase()} ${firstName.slice(1, firstName.length - 1)} ${lastName.toUpperCase}`

console.log(value)