import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => {
            const cellValue = column.Cell ? column.Cell({ row }) : row[column.accessor];
            return <td key={column.accessor}>{cellValue}</td>;
          })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;