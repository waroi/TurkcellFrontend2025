import React from "react";
import Typography from "../Atoms/Typography";
import TwinRadioButtons from "../Molecules/TwinRadioButtons";
import CardBodyTypeOneItem from "../Molecules/CardBodyTypeOneItem";
import Button from "../Atoms/Button";
import PackagesCarouselCardBodyData from "./PackagesCarouselCardBodyData";
import { useTwinRadioOneStore, useTwinRadioTwoStore } from "../Store/ComCom";
import CardBodyTypeTwoItem from "../Molecules/CardBodyTypeTwoItem";
import BootIcon from "../Atoms/BootIcon";
import ViewFeatures from "../Molecules/ViewFeatures";

function PackagesCarouselData() {
    const { UnlimitedCardOneBodyItemData, LimitedCardOneBodyItemData } =  PackagesCarouselCardBodyData();
    const { UnlimitedCardTwoBodyItemData, LimitedCardTwoBodyItemData } =  PackagesCarouselCardBodyData();
    const { CardBodyTypeTwoData } =  PackagesCarouselCardBodyData();

    const {twinRadioOneValue, toggleTwinRadioOneValue} = useTwinRadioOneStore()
    const {twinRadioTwoValue, toggleTwinRadioTwoValue} = useTwinRadioTwoStore()


  const carouselData = [
    {
      header: <Typography variant="h1" className="text-center w-full">ULTIMATE</Typography>,
      headerBottom: <TwinRadioButtons value={twinRadioOneValue} toggle={toggleTwinRadioOneValue}></TwinRadioButtons>,
      body: <CardBodyTypeOneItem twinRadioValue={twinRadioOneValue} data1={UnlimitedCardOneBodyItemData} data2={LimitedCardOneBodyItemData}/>,
      viewFeatures: "",
      button: <Button variant="contained" className="text-center w-full">SATIN AL</Button>,
    },
    {
      header: <Typography variant="h1" className="text-center">PERFORMANCE</Typography>,
      headerBottom: <TwinRadioButtons  value={twinRadioTwoValue} toggle={toggleTwinRadioTwoValue}></TwinRadioButtons>,
      body: <CardBodyTypeOneItem twinRadioValue={twinRadioTwoValue} data1={UnlimitedCardTwoBodyItemData} data2={LimitedCardTwoBodyItemData}/>,
      viewFeatures: "",
      button: <Button variant="contained" className="text-center w-full">SATIN AL</Button>,
    },
    {
      header: <Typography variant="h1" className="text-center">PERFORMANCE</Typography>,
      headerBottom: "",
      body: <CardBodyTypeTwoItem dataBody={CardBodyTypeTwoData[0]}/>,
      viewFeatures: <ViewFeatures/>,
      button: <Button variant="contained" className="text-center w-full">HEMEN DENE</Button>,
    },
    {
      header: <Typography variant="h1" className="text-center">Ubisoft+ Cloud Play</Typography>,
      headerBottom: "",
      body: <CardBodyTypeTwoItem dataBody={CardBodyTypeTwoData[1]}/>,
      viewFeatures: <ViewFeatures/>,
      button: <Button variant="contained" className="text-center w-full bg-yellow-500 hover:bg-yellow-600">SATIN AL</Button>,
    },
    {
      header: <Typography variant="h1" className="text-center">BASIC</Typography>,
      headerBottom: <Typography variant="p" className="italic text-center">Sınırlı Erişim</Typography>,
      body: <CardBodyTypeTwoItem dataBody={CardBodyTypeTwoData[2]}/>,
      viewFeatures: <ViewFeatures/>,
      button: <Button variant="contained" className="text-center w-full">HEMEN DENE</Button>,
    },
  ];


  return carouselData;
}

export default PackagesCarouselData;
