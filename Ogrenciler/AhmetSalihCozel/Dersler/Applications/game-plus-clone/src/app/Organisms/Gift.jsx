import React from 'react'
import Typography from '../Atoms/Typography'
import Image from 'next/image'
import Button from '../Atoms/Button'

function Gift() {
  return (
    <section className="grid grid-cols-3 items-center m-5">
      <Image src="/img/nvidia-gift-bg.webp" height={500} width={140} alt='Gift Icons Image' />
      
      <div className='flex flex-col gap-8 items-center'>
        <Typography variant="h2" className="text-lime-500 text-center" after={true}>
          Hediye Kartlarını Aktifleştir
        </Typography>
        <Typography variant="h4" className="text-center">
          Hediye kartındaki kodu ya da sana tanımlanan promosyon kodunu aktive edebilirsin.
        </Typography>
        <Button variant='outlined' className='w-60 text-center'>Kod Aktivasyonu Yap</Button>
      </div>

      <div className="justify-end md:flex sm:hidden">
        <Image src="/img/nvidia-gift-bg.webp" height={500} width={140} alt='gift icon image' />
      </div>
    </section>
  )
}

export default Gift
