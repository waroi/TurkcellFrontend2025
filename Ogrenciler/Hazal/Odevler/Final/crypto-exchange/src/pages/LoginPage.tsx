'use client'

import Footer from "@/components/organism/Footer/Footer"
import InfoSection from "@/components/organism/InfoSection/InfoSection"
import LoginOrganism from "@/components/organism/Login/Login"
import { useAuthStore } from "@/stores/authStore"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const LoginPage = () => {
    const { user, loading } = useAuthStore()
    const router = useRouter()

    useEffect(() => {
        if (!loading && user) {
            router.push("/dashboard")
        }
    }, [user, loading, router])

    if (loading) {
        return <div>Yükleniyor...</div>
    }

    if (user) return null

    return (
        <div className="w-100">
            <LoginOrganism />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default LoginPage