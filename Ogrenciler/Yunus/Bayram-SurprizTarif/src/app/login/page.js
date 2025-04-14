'use client';

import Link from 'next/link';
import { useRedirectIfAuthenticated } from '../lib/hooks/useRedirectIfAuthenticated';
import { LoginForm } from '../components/LoginForm/LoginForm';

export default function LoginPage() {
    useRedirectIfAuthenticated('/dashboard');

    return (
        <div className="container">
            <LoginForm />
            <p className="text-center mt-4">
                Hesabınız yok mu?{' '}
                <Link href="/register" className="text-blue-600 hover:text-blue-800">
                    Kayıt Ol
                </Link>
            </p>
        </div>
    )
}