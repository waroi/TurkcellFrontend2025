let user = {
  firstName: 'Furkan',
  age: 99,
  city: 'Urfa',
  langs: ['Javascript', 'Python'],
};

localStorage.setItem('user', JSON.stringify(user));
let getUser = JSON.parse(localStorage.getItem('user'));
console.log(getUser);
console.log(typeof getUser);
