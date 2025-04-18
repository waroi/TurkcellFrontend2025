"use client";
import React, { useEffect, useRef, useState } from "react";
import "./CryptoTable.scss"
import Button from "../../Atoms/Button/Button";
import Image from "next/image";
import Typography from "../../Atoms/Typography/Typography";
import { useCoinStore } from "@/app/store/useCoinStore";
import useTableList from "@/app/hooks/useTableList";
import ListMapper from "../../Molecules/ListMappper";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { CoinData } from "@/app/types/CoinDataType";


const CryptoTable = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const {coins} = useCoinStore()
    const {listItems} = useTableList()

    useEffect(()=>{
    },[searchValue])

  if(!coins) return <div>loading...</div>

    function filterCoinTable(coins:CoinData[],searchValue:string) {
      return coins.filter((coin:CoinData)=>coin.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    }


  return (
    <section className="container tableContainer">
      <div className="flex flex-col gap-16">
        <div className="flex justify-between">
          <Typography variant="head-2">Market Update</Typography>
          <Typography variant="free" className="fs-16 f-bold color-secondary">See All Coins</Typography>
        </div>
        <div className="flex justify-between items-center">
        <ListMapper listItems={listItems} ulClassName='h-full flex gap-8' liClassName='pr-24 py-8 h-full' />
        <input onChange={(e)=>setSearchValue(e.target.value)} className="tableSearchBar" type="text" placeholder="Search" />
        </div>
      </div>
      <table className="w-full border-collapse mt-40">
        <thead>
          <tr className="text-left">
            <th className="">Name</th>
            <th className="">Last Price</th>
            <th className="">24h %</th>
            <th className="">Market Cap</th>
            <th className="">Last 7 Days</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {filterCoinTable(coins,searchValue).map((coin) => (
            <tr key={coin.symbol} className="tableRow border-rad-36">
              <td className="flex gap-8 items-center justify-start">
                <Image src={coin.image} alt={coin.name} width={24} height={24} />
                <Typography variant="free" className="fs-18">{coin.name}</Typography>
                <div className="verticalLine"></div>
                <Typography variant="free">{coin.symbol}</Typography>
              </td>
              <td className=""><Typography variant="free" className="fs-18 f-bold">{coin.currentPrice}</Typography></td>
              <td className=" text-uppercase">
                <Typography 
                  variant="free"
                  className={`color-${coin.priceChangePercentage24h<0?"critical":"success"} f-normal fs-18`}>
                    {coin.priceChangePercentage24h}%
                </Typography>
              </td>
              <td>
                <Typography variant="free" className="fs-18 f-bold">{coin.marketCap}</Typography>
              </td>
              <td className="flex items-center">
                <Sparklines  data={coin.sparklineSevenDays} width={500} height={88}>
                  <SparklinesLine color={coin.priceChangePercentage24h < 0 ? "red" : "green"} />
                </Sparklines>
                </td>
              <td className="pl-24">
                  <Button height={40} variant="outlined" className="sm-1 py-12 px-16 tradeButton">Trade</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CryptoTable;
