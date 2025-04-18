import { useState, useMemo } from 'react';

type SortDirection = 'asc' | 'desc' | null

interface SortConfig {
    key: string | null
    direction: SortDirection
}

export function useSortableTable<T extends Record<string, any>>(data: T[]) {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });

    const sortedData = useMemo(() => {
        if (!sortConfig.key || !sortConfig.direction) return data

        return [...data].sort((a, b) => {
            const aValue = a[sortConfig.key!]
            const bValue = b[sortConfig.key!]

            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return sortConfig.direction === 'asc'
                    ? aValue - bValue
                    : bValue - aValue
            }

            const aStr = String(aValue).toLowerCase()
            const bStr = String(bValue).toLowerCase()
            return sortConfig.direction === 'asc'
                ? aStr.localeCompare(bStr)
                : bStr.localeCompare(aStr)
        })
    }, [data, sortConfig])

    const handleSort = (key: string) => {
        let direction: SortDirection = 'asc'
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc'
        }
        setSortConfig({ key, direction })
    }

    return { sortedData, sortConfig, handleSort }
}