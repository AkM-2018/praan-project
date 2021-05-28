import React from 'react'
import {TextField} from '@material-ui/core'
import useStyles from '../styles'

/**
 * DateSelector component:
 * Date picker which changes the hook variable date when date is changed 
 */
const DateSelector = ({date, setdate}) => {
    const classes = useStyles()

    const handleDateChange = (event) => {
        const response = event.target.value
        const newDate = `${(response).substr(0,4)}-${(response).substr(5,2)}-${(response).substr(8,2)}`
        setdate(newDate)
    }

    return (
        <form className={classes.formContainer} noValidate>
            <TextField
                id="date"
                type="date"
                defaultValue={date}
                onChange={handleDateChange}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
    )
}

export default DateSelector
