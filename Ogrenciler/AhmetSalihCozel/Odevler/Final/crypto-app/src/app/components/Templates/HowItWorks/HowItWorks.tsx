import React from 'react'
import Typography from '../../Atoms/Typography/Typography'
import "./HowItWorks.scss"
import Image from 'next/image'

function HowItWorks() {
    const connectLine = <Image height={12} width={160} src="/img/connect_line.png" alt='connect_line'/>
  return (
    <section className='flex flex-col items-center howItWorksWrapper theme-bg-smooth'>
        <div className='flex flex-col items-center justify-center typoOneWrap gap-16'>
            <Typography variant='head-2'>How It Work</Typography>
            <Typography variant='free' className='fs-20 color-secondary text-center'>Stacks is a production-ready library of stackable content blocks built in React Native.</Typography>
        </div>
        <div className='container flex justify-between items-center'>
            <div className='flex flex-col items-center justify-center gap-8 stepWrap'>
                <Image height={96} width={96} src="/img/Bitcoin_Cloud.png" alt='bitcoin_cloud'/>
                <Typography variant='free' className='color-secondary f-bold fs-12'>STEP 1</Typography>
                <Typography variant='body-1' className='fs-20 f-bold'>Connect wallet</Typography>
                <Typography variant='body-3' className='fs-16 text-center'>Stacks is a production-ready library of stackable content blocks built in React Native.</Typography>
            </div>
            {connectLine}
            <div className='flex flex-col items-center justify-center gap-8 stepWrap'>
                <Image height={96} width={96} src="/img/Bitcoin_Wallet.png" alt='bitcoin_cloud'/>
                <Typography variant='free' className='color-secondary f-bold fs-12'>STEP 2</Typography>
                <Typography variant='body-1' className='fs-20 f-bold'>Download</Typography>
                <Typography variant='body-3' className='fs-16 text-center'>Stacks is a production-ready library of stackable content blocks built in React Native.</Typography>
            </div>
            {connectLine}
            <div className='flex flex-col items-center justify-center gap-8 stepWrap'>
                <Image height={96} width={96} src="/img/Bitcoin_Mining.png" alt='bitcoin_cloud'/>
                <Typography variant='free' className='color-secondary f-bold fs-12'>STEP 3</Typography>
                <Typography variant='body-1' className='fs-20 f-bold'>Start trading</Typography>
                <Typography variant='body-3' className='fs-16 text-center'>Stacks is a production-ready library of stackable content blocks built in React Native.</Typography>
            </div>
            {connectLine}
            <div className='flex flex-col items-center justify-center gap-8 stepWrap'>
                <Image height={96} width={96} src="/img/Bitcoin_Comparison.png" alt='bitcoin_cloud'/>
                <Typography variant='free' className='color-secondary f-bold fs-12'>STEP 4</Typography>
                <Typography variant='body-1' className='fs-20 f-bold'>Earn money</Typography>
                <Typography variant='body-3' className='fs-16 text-center'>Stacks is a production-ready library of stackable content blocks built in React Native.</Typography>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks