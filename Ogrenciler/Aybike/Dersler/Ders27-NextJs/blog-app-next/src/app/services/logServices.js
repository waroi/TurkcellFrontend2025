const API_URL = 'http://localhost:3002/blogs'
const FIRE_URL = 'http://localhost:3002/users'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import app from '../firebase/firebase'

export const registerUser = async (email, password, username) => {
  const auth = getAuth(app)
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    const response = await fetch(FIRE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: userCredential.user.uid,
        email: email,
        password: password,
        username: username
      })
    })
    const data = await response.json()
    if (response.ok) {
      return data
    }
  } catch (error) {
    console.error('Hata:', error.message)
    throw error
  }
}

export const SignIn = async (email, password) => {
  const auth = getAuth()
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    alert('Başarıyla giriş yaptınız yönlendiriliyorsunuz...')
    console.log('Kullanıcı giriş yaptı:', userCredential.user)
    return userCredential.user
  } catch (error) {
    alert('Kullanıcı adı veya şifreniz hatalı !')
    console.error('Hata:', error.message)
    throw error
  }
}
// export async function getBooks() {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     if (response.ok) {
//       return data;
//     }
//   } catch (error) {
//     console.log("Request Model Error: ", error);
//     return null;
//   }
// }

// export async function postBooks(book) {
//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...book,
//         id: Date.now().toString(),
//       }),
//     });
//     const data = await response.json();
//     console.log("data:", data);
//     if (response.ok) {
//       return data;
//     }
//   } catch (error) {
//     console.log("Request Model Error: ", error);
//     return null;
//   }
// }

// export const deleteBooks = async (id) => {
//   try {
//     const response = await fetch(`http://localhost:3000/books/${id}`, {
//       method: "DELETE",
//     });
//     const responseData = await response.json();
//     return response;
//   } catch (error) {
//     console.error("Silme isteği başarısız oldu:", error);
//     return null;
//   }
// };

// export async function updateBooks(id, book) {
//   try {
//     const response = await fetch(`${API_URL}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(book),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       return data;
//     }
//   } catch (error) {
//     console.log("Request Model Error: ", error);
//     return null;
//   }
// }

// export async function getOneUser(id) {
//   try {
//     const response = await fetch(`${FIRE_URL}/${id}`);
//     const data = await response.json();
//     if (response.ok) {
//       return data;
//     }
//   } catch (error) {
//     console.log("Request Model Error: ", error);
//     return null;
//   }
// }

export async function getBlogsByAuthor(id) {
  try {
    const response = await fetch(`${API_URL}/?author=${id}`);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}
