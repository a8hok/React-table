import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import MenuIcons from './MenuIcons';
import ExpandableTableComponent from './ExpandatableTable';


export default function Main() {

    const year = new Date().getFullYear();

    const [selectedYear, setSelectedYear] = React.useState(year);
    
    const useStyles = makeStyles((theme) => ({
        container: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(2),
        },
        form: {
            marginLeft: theme.spacing(4),
        },
    }));
    
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div className={classes.container}>
            <MenuIcons></MenuIcons>
            <FormControl className={classes.form}>
                <Select
                    native
                    value={selectedYear}
                    onChange={handleChange}
                >
                    { 
                        Array.from( new Array(10), (v,i) => 
                            <option key={i} value={year-i}>{year-i}</option>
                        )
                    }
                </Select>
            </FormControl>
            <ExpandableTableComponent selectedYear={selectedYear}></ExpandableTableComponent>
        </div>
    )
}
