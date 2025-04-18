"use client"
import React from 'react'
import Typography from '../Atoms/Typography/Typography'
import "../Templates/GeneralCoinView/GeneralCoinView.scss"
import Image from 'next/image'
import { CoinData } from '@/app/types/CoinDataType'

function CoinViewCard({coinObj}:{coinObj:CoinData}) {

  if (!coinObj) return <div>Loading...</div>

  return (
    <div className='py-32 pl-40 flex flex-col gap-8'>
        <div className='flex gap-8 items-center justify-start'>
          <Image height={24} width={24} src={coinObj.image} alt={coinObj.name}></Image>
          <Typography variant='caption-1' className='f-bold'>{coinObj.name}</Typography>
          <Typography variant='caption-1' className='f-bold color-secondary'>{coinObj.symbol.toUpperCase()+"/"+coinObj.currency.toUpperCase()}</Typography>
        </div>
          <Typography variant='head-5' className='color-critical'>{coinObj.currentPrice}</Typography>
        <div className='flex gap-8 justify-start'>
          <Typography variant='caption-1' className='color-dark'>{coinObj.yesterdayPrice+" "+coinObj.currency.toUpperCase()}</Typography>
          <Typography variant='caption-1' 
              className={`bg-${coinObj.priceChangePercentage24h<0?"critical":"success"} px-8 py-2 border-rad-40 color-surfaceMain`}>
                {coinObj.priceChangePercentage24h+"%"}
            </Typography>
        </div>
    </div>
  )
}

export default CoinViewCard