// function getText () {
//   fetch('users.json').then(response =>
//     response
//       .json()
//       .then(data => console.log(data))
//       .catch(err => console.log(err))
//   )
// }

// getText()

class Request {
  static get (url) {
    return new Promise((res, rej) => {
      fetch('users.json').then(response =>
        response
          .json()
          .then(data => console.log(data))
          .catch(err => console.log(err))
      )
    })
  }
}

Request.get('')
  .then(data => console.log(data))
  .catch(err => console.log(err))
