
import React from "react"
import HeroFirst from "./components/Templates/HeroFirst/HeroFirst"
import GeneralCoinView from "./components/Templates/GeneralCoinView/GeneralCoinView"
import CryptoTable from "./components/Templates/CryptoTable.tsx/CryptoTable"
import HowItWorks from "./components/Templates/HowItWorks/HowItWorks"

export default function home() {

  return (
    <React.Fragment>
      <HeroFirst/>
      <GeneralCoinView/>
      <CryptoTable/>
      <HowItWorks/>
      </React.Fragment>
  )
}