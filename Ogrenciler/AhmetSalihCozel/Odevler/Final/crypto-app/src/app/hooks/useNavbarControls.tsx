"use client"
import BootIcon from "../components/Atoms/Icon/BootIcon";
import React from 'react';
import Typography from "../components/Atoms/Typography/Typography";
import Button from "../components/Atoms/Button/Button";
import Image from "next/image";
import { useTheme } from "next-themes";
import CurrencyDropdown from "../components/Atoms/Dropdown/Dropdown";

function useNavbarControls() {
    const { theme, setTheme } = useTheme();
    function toggleTheme() {
      theme === "dark" ? setTheme("light") : setTheme("dark");
    }
    const listControlItems: React.ReactNode[] = [
        <Typography variant="head-5" btnAlike="df">Assets<BootIcon iconName="caret-down" size={8}></BootIcon> </Typography>,
        <Typography variant="head-5" btnAlike="df">Orders && Trades</Typography>,
        <CurrencyDropdown/>,
        <Typography variant="head-5" btnAlike="df">EN/USD</Typography>,
        <div className="flex gap-16 items-center justify-between">
            <div onClick={toggleTheme} className="px-8 border-lr">
                <BootIcon iconName="brightness-high" size={14}></BootIcon>
            </div>
            <BootIcon iconName="bell" size={14}></BootIcon>
            <Button variant="outlined" className="py-12 px-8" fontSize="sm-2">Wallet</Button>
            <Image src="/img/person.jpg" height={30} width={30} alt="profile-picture" className="rounded-image"/>
        </div>
        
    ];
    return ({listControlItems})
}

export default useNavbarControls
