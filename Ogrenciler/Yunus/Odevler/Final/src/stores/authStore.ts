import { create } from 'zustand';
import { User } from 'firebase/auth';
import { persist } from 'zustand/middleware';

interface AuthState {
    user: User | null
    loading: boolean
    error: string | null
    setUser: (user: User | null) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            loading: true,
            error: null,
            setUser: (user) => set({ user }),
            setLoading: (loading) => set({ loading }),
            setError: (error) => set({ error }),
        }),
        {
            name: 'auth-store',
            partialize: (state) => ({
                user: state.user ? {
                    uid: state.user.uid,
                    email: state.user.email,
                    displayName: state.user.displayName,
                    photoURL: state.user.photoURL,
                } : null,
            }),
        }
    )
)