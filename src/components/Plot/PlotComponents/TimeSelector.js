import React from 'react'
import {Slider} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

/* Styles for Slider component */
const CustomSlider = withStyles({
    root: {
        color: "#F04E55",
        height: 3,
        padding: "13px 0",
    },
    track: {
        height: 4,
        borderRadius: 2,
    },
})(Slider);

/**
 * TimeSelector:
 * Slider for selecting the time range for the x-axis on the line plot
 */
const TimeSelector = ({time, settime}) => {

    const handleTimeValues = (event, newTime) => {
        settime(newTime)
    }

    return (
        <CustomSlider
            value={time}
            onChange={handleTimeValues}
        />
    )
}

export default TimeSelector