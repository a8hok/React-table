import React from "react";
import { useTable, useExpanded } from 'react-table';

export default function Table({ columns: userColumns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { expanded },
    } = useTable(
        {
            columns: userColumns,
            data,
        },
        useExpanded
    )
    return (
        <div>
            <table className="table" {...getTableProps()}>
            <thead>
                <tr {...headerGroups[1].getHeaderGroupProps()}>
                    {headerGroups[1].headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        }) 
                    }
                </tbody>
            </table>
            <br />
        </div >
    )
}
