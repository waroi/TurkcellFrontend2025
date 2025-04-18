import React from 'react';
import './MarketBigTable.scss';
import MarketRow from '../MarketRow/MarketRow';
import MarketTableHeader from '@/components/molecules/MarketTableHeader/MarketTableHeader';
import { useSortableTable } from '@/hooks/useSortTable';

interface MarketBigTableProps {
    coins: any[]
    favorites: string[]
    onToggleFavorite: (id: string) => void
    className?: string
    tableColumns: string[]
}

const MarketBigTable: React.FC<MarketBigTableProps> = ({
    coins,
    favorites,
    onToggleFavorite,
    className,
    tableColumns,
}) => {
    const { sortedData, handleSort } = useSortableTable(coins)

    return (
        <div className="container-xl container-fluid">
            <div className={`market-table-container shadow w-100 market-big-table table-responsive ${className || ''}`}>
                <div className="px-4">
                    <table className="table table-hover">
                        <MarketTableHeader
                            columns={tableColumns}
                            onSort={handleSort}
                        />
                        <tbody>
                            {sortedData.length > 0 ? (
                                sortedData.map((coin: any) => (
                                    <MarketRow
                                        key={coin.id}
                                        coin={coin}
                                        isFavorite={favorites.includes(coin.id)}
                                        onToggleFavorite={onToggleFavorite}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={tableColumns.length}
                                        className="text-center py-4"
                                    >
                                        No coins found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MarketBigTable