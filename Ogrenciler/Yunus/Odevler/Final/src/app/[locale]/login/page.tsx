import LoginPage from '@/pages/LoginPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Login - Rocket Crypto",
    description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const Login = () => {
    return (
        <LoginPage />
    )
}

export default Login