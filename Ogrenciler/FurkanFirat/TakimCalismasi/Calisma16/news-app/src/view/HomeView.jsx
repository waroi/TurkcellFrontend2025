import {useEffect, useState} from 'react';
import {fetchNews} from '../service/api';
import NewsSlider from '../components/NewsSlider';
import HomeCards from '../components/HomeCards';

export default function HomeView() {
  


  return (
    <>
      <h1 className='text-center mt-3'>NEWS</h1>
      <NewsSlider category="general"/>
      <HomeCards/>
    </>
  );
}
