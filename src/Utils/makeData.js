import coreData from '../Data/data';

export const makeData = (year) => {

    const prevYrData = coreData[year - 1];
    const currentYrData = coreData[year];

    const calSum = ({budget, expand, subRows, ...theArgs}) => {
        const valTotal = Object.values(theArgs).reduce((acc, val) => acc + Number(val),0);
        return (valTotal / Object.values(theArgs).length).toFixed(2);
    }
    
    const spiltData = (field) => {
        const {
            expand
        } = field.rooms;
        field.rooms.total = calSum(field.rooms);

        expand[0].group.total = calSum(expand[0].group);
        expand[1].contract.total = calSum(expand[1].contract);

        field.rooms.subRows = [
            expand[0].group,
            expand[1].contract,
        ];
        return field.rooms;
    }

    const calcYearVal = (year) => {
        const {
            fullweek,
            weekday
        } = year.projection;

        fullweek.occupancy.total = calSum(fullweek.occupancy);
        weekday.occupancy.total = calSum(weekday.occupancy);
        
        return [
            fullweek.occupancy,
            spiltData(fullweek),
            weekday.occupancy,
            spiltData(weekday),
        ];

    }

    const formLastYearData = (lastYearData, currYearData) => {

        currYearData.map((ele, index) => {
            ele.lytotal = lastYearData[index].total;
            ele.variancetotal = (ele.total - ele.lytotal).toFixed(2);
            ele.variancebudget = (ele.budget - ele.total).toFixed(2);

            if(ele.subRows){
                ele.subRows[0].lytotal = lastYearData[index].subRows[0].total;
                ele.subRows[1].lytotal = lastYearData[index].subRows[1].total; 
                ele.subRows[0].variancetotal = (ele.subRows[0].total - ele.subRows[0].lytotal).toFixed(2);
                ele.subRows[1].variancetotal = (ele.subRows[1].total - ele.subRows[1].lytotal).toFixed(2);
                ele.subRows[0].variancebudget = (ele.subRows[0].budget - ele.subRows[0].total).toFixed(2);
                ele.subRows[1].variancebudget = (ele.subRows[1].budget - ele.subRows[1].total).toFixed(2);
            }

        });

        return currYearData;
    }

    const currYearData =calcYearVal(currentYrData);

    const lastYearData = calcYearVal(prevYrData);

    return formLastYearData(lastYearData, currYearData);
}
