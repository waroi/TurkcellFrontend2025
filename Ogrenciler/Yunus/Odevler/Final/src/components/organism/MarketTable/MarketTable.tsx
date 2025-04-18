import React from 'react';
import TableHeader from '@/components/molecules/TableHeader/TableHeader';
import CoinRow from '../CoinRow/CoinRow';

interface MarketTableProps {
    coins: any
    favorites: string[]
    onToggleFavorite: (id: string) => void
    className?: string,
    tableColumns: string[]
}

const MarketTable: React.FC<MarketTableProps> = ({
    coins,
    favorites,
    onToggleFavorite,
    className, tableColumns
}) => {

    return (
        <div className={`market-table-container table-responsive ${className || ''}`}>
            <table className="table table-hover">
                <TableHeader columns={tableColumns} />
                <tbody>
                    {coins.length > 0 ? (
                        coins.map((coin: any) => (
                            <CoinRow
                                key={coin.id}
                                coin={coin}
                                isFavorite={favorites.includes(coin.id)}
                                onToggleFavorite={onToggleFavorite}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={tableColumns.length} className="text-center py-4">
                                No coins found matching your search.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MarketTable