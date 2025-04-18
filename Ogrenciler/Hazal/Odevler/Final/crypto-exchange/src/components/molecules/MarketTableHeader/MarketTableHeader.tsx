import { useTranslations } from 'next-intl';
import React from 'react';

interface MarketTableHeaderProps {
    columns: string[]
    className?: string,
    onSort: (key: string) => void
}

const MarketTableHeader: React.FC<MarketTableHeaderProps> = ({ columns, className, onSort }) => {
    const sortHeader = useTranslations("Market").raw("sortHeader")
    const sortableColumns: any = {
        [sortHeader.tradingParis]: "market_cap_rank",
        [sortHeader.lastPrice]: "price_change_percentage_24h",
        [sortHeader.h24Change]: "price_change_percentage_24h",
        [sortHeader.h24TurnOver]: "market_cap"
    }
    return (
        <thead className={className}>
            <tr>
                {columns.map((column, index) => (
                    <th
                        key={index}
                        scope="col"
                        onClick={() => sortableColumns[column] ? onSort(sortableColumns[column]) : null}
                        style={{
                            cursor: sortableColumns[column] ? 'pointer' : 'default',
                            userSelect: 'none'
                        }}
                        className={sortableColumns[column] ? 'sortable-column' : ''}
                    >
                        {column}
                        {sortableColumns[column] &&
                            <svg className='ms-2' width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_5467_10657)">
                                    <path d="M2.84645 11.1381L4.67178 8.47185C4.75614 8.34872 4.80078 8.22465 4.80078 8.12153C4.80078 7.92216 4.64077 7.79883 4.37294 7.79883L0.427869 7.79883C0.160347 7.79883 0.00064897 7.922 0.000648961 8.1209C0.000648957 8.22418 0.0453334 8.34627 0.129922 8.46967L1.95521 11.1372C2.07279 11.3088 2.23101 11.4038 2.40093 11.4038C2.57073 11.4038 2.72891 11.3099 2.84645 11.1381Z" fill="#3772FF" />
                                </g>
                                <g clipPath="url(#clip1_5467_10657)">
                                    <path d="M2.84645 0.863816L4.67178 3.5301C4.75614 3.65324 4.80078 3.7773 4.80078 3.88043C4.80078 4.0798 4.64077 4.20313 4.37294 4.20313L0.427869 4.20313C0.160347 4.20313 0.00064897 4.07995 0.000648961 3.88105C0.000648957 3.77777 0.0453334 3.65569 0.129922 3.53228L1.95521 0.864749C2.07279 0.6932 2.23101 0.598198 2.40093 0.598198C2.57073 0.598159 2.72891 0.692073 2.84645 0.863816Z" fill="#777E90" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5467_10657">
                                        <rect width="4.80013" height="4.80013" fill="white" transform="translate(4.80078 7.20117) rotate(90)" />
                                    </clipPath>
                                    <clipPath id="clip1_5467_10657">
                                        <rect width="4.80013" height="4.80013" fill="white" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 4.80078 4.80078)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default MarketTableHeader