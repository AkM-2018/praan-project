import React from 'react'
import {Card, CardContent, Typography, ButtonBase} from '@material-ui/core'

/**
 * WindDetails
 * Card component which gives the detail of the most windy day in the last seven days
 */
const WindDetails = ({windyDay, darkMode, pmToWindToggle, setpmToWindToggle}) => {

    const togglePMToWind = () => {
        setpmToWindToggle(!pmToWindToggle)
    }

    return (
        <Card style={{border : "4px solid #F04E55"}}>
            <ButtonBase
                style={{textAlign : "left"}}
                onClick={togglePMToWind}
            >
                <CardContent>
                    <Typography paragraph>The most windy day in the last 7 days</Typography>
                    <Typography variant="h4">{windyDay}</Typography>
                </CardContent>
            </ButtonBase>
        </Card>
    )
}

export default WindDetails