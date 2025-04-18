"use client"
import Image from 'next/image'
import React from 'react'
import Typography from '../Atoms/Typography/Typography'
import ListMapper from '../Molecules/ListMappper'
import useProfileList from '@/app/hooks/useProfileList'

function ProfileSelection() {
    const {listItems} = useProfileList()
  return (
    <div className='mt-100'>
        <div className='flex flex-col items-center mb-40'>
            <Image src="/img/person.jpg" height={120} width={120} alt="profile-picture" className="rounded-image"/>
            <Typography variant='head-5' className='mt-12 mb-4'>Peterson kennady</Typography>
            <Typography variant='free' className='f-normal fs-12'>petersonkenn@demo.com</Typography>
        </div>
        <ListMapper listItems={listItems}></ListMapper>        
    </div>
  )
}

export default ProfileSelection