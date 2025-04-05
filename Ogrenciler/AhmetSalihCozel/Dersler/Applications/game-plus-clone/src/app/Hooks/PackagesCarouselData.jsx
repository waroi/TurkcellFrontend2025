import React from 'react'
import Typography from '../Atoms/Typography';
import TwinRadioButtons from '../Molecules/TwinRadioButtons';
import CardBodyItem from '../Molecules/CardBodyItem';

function PackagesCarouselData() {
  const carouselData = [
    { 
      header: <Typography variant='h1'>ULTIMATE</Typography>,
      headerBottom: <TwinRadioButtons></TwinRadioButtons>,
      body: <CardBodyItem/>,
      buttonText: "Hemen Oyna!"
    }
  ];

  const carouselElement = carouselData.map((carouselItem, index) => (
    <div key={index} className="flex-shrink-0 w-full relative">
      <div className="flex items-center justify-center w-full">
        <div className='card flex flex-col gap-5'>
          {carouselItem.header}
          {carouselItem.headerBottom}
          {carouselItem.body}
        </div>
      </div>
    </div>
  ));
  return { carouselData, carouselElement };
}

export default PackagesCarouselData;
