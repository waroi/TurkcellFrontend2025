'use client';

import Link from 'next/link';
import { useRedirectIfAuthenticated } from '../lib/hooks/useRedirectIfAuthenticated';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
    useRedirectIfAuthenticated('/dashboard');

    return (
        <div className="container">
            <RegisterForm />
            <p className="text-center mt-4">
                Zaten hesabınız var mı?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-800">
                    Giriş Yap
                </Link>
            </p>
        </div>
    );
}