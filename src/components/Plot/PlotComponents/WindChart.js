import React from 'react'
import {Bar, BarChart, Label, ResponsiveContainer, CartesianGrid, YAxis, XAxis, Tooltip} from 'recharts'

/**
 * Wind Chart:
 * Bar graph for Max windspeed for all the devices 
 */
const WindChart = ({darkMode, windPoints}) => {

    let uniqueDates = new Set()
    const datesInfoArray = []
    windPoints.forEach((elem) => {
        if(uniqueDates.has(elem.date)){
            datesInfoArray[datesInfoArray.length-1].windspeed_deviceA_max = Math.max(datesInfoArray[datesInfoArray.length-1].windspeed_deviceA_max, elem.w_DeviceA)
            datesInfoArray[datesInfoArray.length-1].windspeed_deviceB_max = Math.max(datesInfoArray[datesInfoArray.length-1].windspeed_deviceB_max, elem.w_DeviceB)
            datesInfoArray[datesInfoArray.length-1].windspeed_deviceC_max = Math.max(datesInfoArray[datesInfoArray.length-1].windspeed_deviceA_max, elem.w_DeviceC)
        } else {
            uniqueDates.add(elem.date)
            datesInfoArray.push({
                date : elem.date,
                windspeed_deviceA_max : elem.w_DeviceA,
                windspeed_deviceB_max : elem.w_DeviceB,
                windspeed_deviceC_max : elem.w_DeviceC,
            })
        }
    })

    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <BarChart width={500} height={300} data={datesInfoArray}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis tick={{fill: darkMode ? "#fff" : "#000000"}} dataKey="date">
                {datesInfoArray.length ? null
                               : <Label style={{fill: darkMode ? "#fff" : "#000000"}} value="No data available for this day" offset={250} position="top" />}
                </XAxis>
                <YAxis tick={{fill: darkMode ? "#fff" : "#000000"}}>
                <Label style={{fill: darkMode ? "#fff" : "#000000"}} angle="-90" value="Windspeed(km/hr)" offset={-50} position="right" />
                </YAxis>
                <Bar dataKey="windspeed_deviceA_max" fill="#e91e63" />
                <Bar dataKey="windspeed_deviceB_max" fill="#03a9f4" />
                <Bar dataKey="windspeed_deviceC_max" fill="#ffc107" />
                <Tooltip contentStyle={{color:"#000000"}} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default WindChart
