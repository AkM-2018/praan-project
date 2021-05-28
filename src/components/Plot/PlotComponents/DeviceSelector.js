import { Checkbox, FormControl, FormControlLabel, FormGroup} from '@material-ui/core'
import React from 'react'

/**
 * Device Selector:
 * Checkboxes for selecting the devices which are to be plotted
 */
const DeviceSelector = ({devices, setdevices}) => {

    const handleDeviceChange = (event) => {
        const position = parseInt(event.target.value)
        const updatedCheckedState = devices.map((item, index) =>
            index === position ? !item : item
        )
        setdevices(updatedCheckedState)
    }

    return (
        <FormControl component="fieldset">
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={devices[0]} onChange={handleDeviceChange} name="a" />}
                    label="DeviceA" value="0"
                />
                <FormControlLabel
                    control={<Checkbox checked={devices[1]} onChange={handleDeviceChange} name="b" />}
                    label="DeviceB" value="1"
                />
                <FormControlLabel
                    control={<Checkbox checked={devices[2]}  onChange={handleDeviceChange} name="c" />}
                    label="DeviceC" value="2"
                />
            </FormGroup>
        </FormControl>
    )
}

export default DeviceSelector
