import { create } from 'zustand'

const userStore = create((set) => ({
    user: { 
        name: 'Ahmet Salih',
        surname: 'Cozel',
        email: 'ahmetsalihcozel@gmail.com',
        password: "123456",
        rentedCarIds: [],
    },
    action: (text) => set((state) =>
        ({})
    )
}))

export default userStore