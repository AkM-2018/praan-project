import React from 'react'
import {FormControl, RadioGroup, FormControlLabel, Radio} from "@material-ui/core"

/**
 * PM Selector:
 * Radio Buttons for selecting the PM values
 */
const PMSelector = ({val, setVal}) => {

    const handleChange = (event) => {
        setVal(event.target.value);
    }

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="pmValues" name="pm" value={val} onChange={handleChange}>
                <FormControlLabel value="pm1" control={<Radio />} label="PM1" />
                <FormControlLabel value="pm10" control={<Radio />} label="PM10" />
                <FormControlLabel value="pm25" control={<Radio />} label="PM2.5" />
            </RadioGroup>
        </FormControl>
    )
}

export default PMSelector
