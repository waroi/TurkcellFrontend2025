import { useAuthContext } from '../AuthContext';

export const useAuth = () => {
    return useAuthContext()
}