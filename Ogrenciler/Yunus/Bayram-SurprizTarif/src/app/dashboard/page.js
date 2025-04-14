'use client';

import { useAuth } from "../auth/hooks/useAuth";
import { useRequireAuth } from "../lib/hooks/useRequireAuth";
import Link from 'next/link';
import styles from './page.module.css';

export default function DashboardPage() {
    const { user, loading } = useRequireAuth()
    const { logout } = useAuth()

    if (loading) {
        return <div>Yükleniyor...</div>
    }

    return (
        <div className={styles.container}>
            <h1>Hoş geldiniz!</h1>
            <p>Hesap: {user?.email}</p>

            <Link href='/recipes' className={styles.recipeLink}>
                Tarifler
            </Link>

            <button
                onClick={logout}
                className={styles.logoutButton}
            >
                Çıkış Yap
            </button>
        </div>
    )
}