import React from 'react';
import Typography from "../components/Atoms/Typography/Typography";

function useTableList() {
    const listItems: React.ReactNode[] = [
        <Typography variant="caption-1" className='color-surface f-bold bg-primary border-rad-40 px-12 py-8' btnAlike="df">View All</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Metaverse</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Entertainment</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Energy</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">NFT</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Gaming</Typography>,
        <Typography variant="caption-1" className='.theme-type-color f-bold' btnAlike="df">Music</Typography>,
    ];
    return ({listItems})
}

export default useTableList
