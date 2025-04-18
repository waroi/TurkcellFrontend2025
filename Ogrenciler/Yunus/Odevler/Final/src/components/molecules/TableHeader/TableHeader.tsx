import React from 'react';

interface TableHeaderProps {
    columns: string[]
    className?: string,
    onSort?: any,
    sortConfig?: any
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, className, onSort, sortConfig }) => {
    return (
        <thead className={className}>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} scope="col">{column}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader