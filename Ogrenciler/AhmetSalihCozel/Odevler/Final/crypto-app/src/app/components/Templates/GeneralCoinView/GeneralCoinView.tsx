"use client"
import React from 'react'
import ListMapper from '../../Molecules/ListMappper'
import useCoinViewList from '@/app/hooks/useCoinViewList'
import CoinViewCard from '../../Molecules/CoinViewCard'
import { useCoinStore } from '@/app/store/useCoinStore'
import { CoinData } from '@/app/types/CoinDataType'

function GeneralCoinView() {
  const {listItems} = useCoinViewList()
    const {coins} = useCoinStore()

  if (!coins) return <div>Loading...</div>
  return (
    <div className='container theme-bg-hard'>
      <div className='px-32 pb-32 flex flex-col border-rad-24 shadow-8'>
        <ListMapper ulClassName='h-full flex my-16' liClassName='pr-28 py-8 h-full' listItems={listItems} />
        <div className='flex justify-between w-full'>
          { !coins 
            ? <div>Loading...</div>
            : coins.slice(0,4).map((item: CoinData, index: number) => (
                <CoinViewCard key={index} coinObj={item} />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default GeneralCoinView