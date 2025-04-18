import React from 'react'
import ListMapper from '../../Molecules/ListMappper'
import Typography from '../../Atoms/Typography/Typography'
import "./Footer.scss"
import NavbarLogo from '../../Molecules/NavbarLogo'
import BootIcon from '../../Atoms/Icon/BootIcon'
import Button from '../../Atoms/Button/Button'
import Link from 'next/link'

function Footer() {
    const icons = ["facebook","twitter","instagram","linkedin"].map((icon,index)=><BootIcon key={index} iconName={icon} size={16}/>)

    const listProducts = ["Spot","Inverse Perpetual","USDT Perpetual","Exchange","Launchpad","Binance Pay"]
    .map((item,index)=><Typography key={index} variant='free' className='fs-16 f-normal color-secondary2'>{item}</Typography>)


  return (
    <section className='flex flex-col'>
            <div className='container imageTopImgContainer flex justify-between items-center scontainer py-34 h-full'>
                <div className='flex flex-col justify-center gap-12 items-start h-full'>
                    <Typography variant='free' className='color-surfaceMain fs-32 f-bold'>Earn up to $25 worth of crypto</Typography>
                    <Typography variant='free' className='color-surfaceMain fs-16 f-normal'>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</Typography>
                </div>
                <Link href="/register"><Button variant='non-styled' className='px-16 py-12 border-none border-rad-28 cursor-pointer f-bold footerTopButton'>Create Account</Button></Link>
            </div>
        <div className='container footerWrap'>
            <div className='flex flex-col align-center justify-center'>
                <Link href="/"><NavbarLogo className="flex justify-start items-center gap-8"/></Link>
                <div className='flex flex-col gap-16'>
                    <Typography variant='head-5' className='mt-24'>Let's talk! 🤙</Typography>
                    <Typography variant='body-3'>+98 902 353 2926</Typography>
                    <Typography variant='body-3'>sinahosseini379@gmail.com</Typography>
                    <Typography variant='body-3'>Copyright © 2023  Free For Earth’s people</Typography>
                </div>
            </div>
            <div className='flex flex-col gap-16'>
                <Typography variant='caption-1' className='f-bold'>PRODUCTS</Typography>
                <ListMapper ulClassName='flex flex-col gap-8' listItems={listProducts}></ListMapper>
            </div>
            <div className='flex flex-col gap-16'>
                <Typography variant='caption-1' className='f-bold'>PRODUCTS</Typography>
                <ListMapper ulClassName='flex flex-col gap-8' listItems={listProducts}></ListMapper>
            </div>
            <div className='flex flex-col gap-16'>
                <Typography variant='caption-1' className='f-bold'>PRODUCTS</Typography>
                <ListMapper ulClassName='flex flex-col gap-8' listItems={listProducts}></ListMapper>
            </div>
            <div className='flex flex-col gap-16'>
                <Typography variant='caption-1' className='f-bold'>PRODUCTS</Typography>
                <ListMapper ulClassName='flex flex-col gap-8' listItems={listProducts}></ListMapper>
            </div>

        </div>
        <div className='theme-bg-smooth mt-60'>
            <div className='flex justify-between items-center footerBottomWrap container'>
                <Typography variant='body-3'>Copyright © 2023  Free For Earth’s people</Typography>
                <div className='flex gap-24 items-center justify-between'>
                {icons}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer