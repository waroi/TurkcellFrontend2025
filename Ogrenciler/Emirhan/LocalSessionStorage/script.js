const myName = 'Emirhan'
localStorage.setItem('name', myName)
localStorage.setItem('age', 55)

const getAge = Number(localStorage.getItem('age'))
const getName = localStorage.getItem('name')
console.log(getName)
console.log(getAge)
console.log(typeof getAge)
document.write(getAge)

let user = {
  name: 'Emirhan',
  city: 'Samsun',
  age: 22,
  like: ['post1', 'post2', 'post3'],
  skills: {
    lang: ['js', 'react', 'ts', 'three']
  }
}

localStorage.setItem('user', JSON.stringify(user))
const getUser = localStorage.getItem('user')
const parseUser = JSON.parse(getUser)
console.log(parseUser)