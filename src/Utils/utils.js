export const defaultColumns = [
    {
        Header: 'Total',
        accessor: 'total',
    },
    {
        Header: 'LY Total',
        accessor: 'lytotal',
    },
    {
        Header: 'Variance LY Total',
        accessor: 'variancetotal',
    },
    {
        Header: 'Budget',
        accessor: 'budget',
    },
    {
        Header: 'Variance Budget',
        accessor: 'variancebudget',
    },
];

export const randomArr = (year) => Array.from( new Array(12), (v,i) => ({
    Header: `${i+1}/${year}`,
    accessor: `${i+1}`,
}));
