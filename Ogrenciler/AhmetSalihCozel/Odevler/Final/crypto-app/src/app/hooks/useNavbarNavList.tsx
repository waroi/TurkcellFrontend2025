import BootIcon from "../components/Atoms/Icon/BootIcon";
import React from 'react';
import Typography from "../components/Atoms/Typography/Typography";

function useNavbarNavList() {
    const listItems: React.ReactNode[] = [
        <Typography variant="head-5" btnAlike="df">Buy Crypto<BootIcon iconName="caret-down" size={8}></BootIcon> </Typography>,
        <Typography variant="head-5" btnAlike="df">Marketws</Typography>,
        <Typography variant="head-5" btnAlike="df">Exchange</Typography>,
        <Typography variant="head-5" btnAlike="df">Spot</Typography>,
        <Typography variant="head-5" btnAlike="df">BITUSDT <BootIcon iconName="fire" size={10} className="primary"></BootIcon></Typography>,
        <Typography variant="head-5" btnAlike="df">Pages <BootIcon iconName="caret-down" size={8}></BootIcon></Typography>,
    ];
    return ({listItems})
}

export default useNavbarNavList
