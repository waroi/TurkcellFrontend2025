'use client'
import { createContext, useContext } from "react"

export const AuthContext = createContext({
    user: null,
    loading: true,
    login: async () => { },
    register: async () => { },
    logout: async () => { },
})

export const useAuthContext = () => useContext(AuthContext)