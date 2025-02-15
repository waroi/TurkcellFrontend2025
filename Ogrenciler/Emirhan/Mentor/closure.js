function logIn () {
  let password = '1234567'

  return function authenticate (userName, pass) {
    if (pass === password) {
      console.log(`${userName} successfully logged in!`)
    } else {
      console.log('Incorrect password!')
    }
  }
}
let userName = prompt('Lütfen kullanıcı adınızı giriniz!')
let pass = prompt('Lütfen şifrenizi giriniz!')

const authenticate = logIn()
authenticate(userName, pass)
