"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const useAuthRedirect = (redirectPath = "/blog", waitSeconds = 3) => {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [count, setCount] = useState(waitSeconds)

    useEffect(() => {
        if (status === "authenticated") {
            const timer = setTimeout(() => {
                if (count === 0) {
                    router.push(redirectPath);
                } else {
                    setCount(count - 1)
                }
            }, 1000);
            return () => clearTimeout(timer)
        }
    }, [count, router, status, redirectPath])

    return { session, status, count }
}