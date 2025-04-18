import { useState, useEffect } from 'react';

export function useSidebar() {
    const [sidebarActive, setSidebarActive] = useState(false)
    const toggleSidebar = () => {
        setSidebarActive((prev) => !prev)
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200 && sidebarActive) {
                setSidebarActive(false)
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [sidebarActive])

    return { sidebarActive, toggleSidebar }
}
