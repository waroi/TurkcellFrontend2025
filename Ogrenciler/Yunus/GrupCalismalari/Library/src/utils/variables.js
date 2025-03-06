export const newBookInitialState = {
    id: self.crypto.randomUUID().toString(),
    title: "",
    author: "",
    posterUrl: "",
    description: "",
    publishedYear: "",
    genre: ""
}

export const userInitialState = {
    email: '',
    password: ''
}