import React from "react";

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Table from './Table';
import { defaultColumns, randomArr } from '../Utils/utils';
import { makeData } from '../Utils/makeData';


function ExpandableTableComponent({selectedYear}) {

    const randomColumns = randomArr(selectedYear);
    const totalColumns = [...randomColumns, ...defaultColumns];
    const columns = React.useMemo(
        () => [
            {
                id: 'expander',
                Cell: ({ row }) => {
                    return row.canExpand ? (
                        <span
                            {...row.getToggleRowExpandedProps({
                                style: {
                                    paddingLeft: `${row.depth * 2}rem`,
                                },
                            })}
                        >
                            {row.isExpanded ? <ArrowDropDownIcon/> : <ArrowRightIcon/>}
                        </span>
                    ) : null
                }
            },
            {
                Header: 'Info',
                columns: totalColumns
            },
        ],
        [selectedYear]
    );
    
    const data = makeData(selectedYear);
    return (
        <Table columns={columns} data={data} />
    )
}

export default ExpandableTableComponent;
