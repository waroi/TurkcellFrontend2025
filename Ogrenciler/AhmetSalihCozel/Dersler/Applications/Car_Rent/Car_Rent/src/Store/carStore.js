import { create } from 'zustand'

const carStore = create((set) => ({
    cars: [
        {
            brand: "",
            model: "bmw",
            carId: "",
            isRented: "false"                
        },
        {
            brand: "",
            model: "mercedes",
            carId: "",
            isRented: "false"                
        },
        {
            brand: "",
            model: "ford",
            carId: "",
            isRented: "false"                
        }
    ],

    action: (text) => set((state) =>
        ({})
    )
}))

export default carStore