import React from 'react';
import Typography from "../components/Atoms/Typography/Typography";

function useCoinViewList() {
    const listItems: React.ReactNode[] = [
        <Typography variant="caption-1" className='color-surface f-bold bg-primary border-rad-40 px-12 py-8' btnAlike="df">Crypto</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">DeFi</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">BSC</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">NFT</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Polkadot</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Opensea</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Markersplace</Typography>,
    ];
    return ({listItems})
}

export default useCoinViewList
