import {useState, useEffect} from 'react'
import {Label, ResponsiveContainer, LineChart, CartesianGrid, YAxis, XAxis, Line, Tooltip} from 'recharts'

/**
 * Plot component:
 * Changes the line chart with changes in date, time, seleced pm values and selected devices.
 * Recharts package is used for graphing 
 */
const Chart = ({val, devices, points, time, darkMode}) => {
    const [nodataDisplay, setnodataDisplay] = useState(0)

    useEffect(() => {
        devices.some((elem) => elem === true) ? setnodataDisplay(1) : setnodataDisplay(0)
    }, [devices])

    const dataKeys = {
        "pm1" : "p1_Device",
        "pm10" : "p10_Device",
        "pm25" : "p25_Device"
    }

    const targetDevice = {
        0 : "A",
        1 : "B",
        2 : "C"
    }

    const targetColors = {
        0 : "#f37177",
        1 : "#536dfe",
        2 : "#ffab40"
    }

    let lineArray = []
    for(let i=0;i<devices.length;i++){
        if(devices[i]){
            lineArray.push(<Line strokeWidth="2" key={i} type="monotone" dataKey={`${dataKeys[val]}${targetDevice[i]}`} stroke={`${targetColors[i]}`} activeDot={{ r: 8 }} />)
        }
    }

    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <LineChart
            width={500}
            height={300}
            data={points}
            margin={{
                top: 2,
                right: 0,
                left: 10,
                bottom: 20,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{fill: darkMode ? "#fff" : "#000000"}} dataKey="time" domain={[time[0], time[1]]} >
                {nodataDisplay && points.length ? <Label style={{fill: darkMode ? "#fff" : "#000000"}} value="Timestamp" offset={0} position="bottom" />
                               : <Label style={{fill: darkMode ? "#fff" : "#000000"}} value="No data available for this day" offset={250} position="top" />}
            </XAxis>
            <YAxis tick={{fill: darkMode ? "#fff" : "#000000"}} scale="linear">
                <Label style={{fill: darkMode ? "#fff" : "#000000"}} angle="-90" value="PM values" offset={-45} position="right" />
            </YAxis>
            <Tooltip contentStyle={{color:"#000000"}} />
            {lineArray}                    
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart
