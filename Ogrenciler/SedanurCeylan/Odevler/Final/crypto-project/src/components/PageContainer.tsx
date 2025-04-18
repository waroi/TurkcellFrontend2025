'use client';

import type { ReactNode } from 'react';

interface PageContainerProps {
    children: ReactNode;
    className?: string;
    bgColor?: string;
}

const PageContainer = ({ children, className = '', bgColor }: PageContainerProps) => {
    return (
        <div className={`w-100 ${bgColor}`}>
            <div className={`page-container px-3 px-md-4 ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default PageContainer;
