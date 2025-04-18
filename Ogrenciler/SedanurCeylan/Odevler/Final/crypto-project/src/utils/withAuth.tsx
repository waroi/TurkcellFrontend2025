'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useTranslations } from 'next-intl';

const withAuth = (Component: React.FC) => {
    const ProtectedComponent: React.FC = (props) => {
        const router = useRouter();
        const [isLoading, setIsLoading] = useState(true);
        const t = useTranslations();

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    router.push('/login');
                } else {
                    setIsLoading(false);
                }
            });

            return () => unsubscribe();
        }, [router]);

        if (isLoading) {
            return (
                <div className="text-center py-10 my-10 fs-1 text-black">
                    {t('loading')}...
                </div>
            );
        }

        return <Component {...props} />;
    };

    return ProtectedComponent;
};

export default withAuth;
