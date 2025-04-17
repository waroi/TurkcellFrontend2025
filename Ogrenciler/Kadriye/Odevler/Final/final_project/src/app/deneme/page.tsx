
import React from 'react'
import Navbar from '../components/organisms/Navbar/Navbar'
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('HomePage');
    return (
        <Navbar></Navbar>
    )
}

export default page