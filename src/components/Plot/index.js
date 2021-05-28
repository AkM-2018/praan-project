import {useEffect, useState} from 'react'
import processedData from './dataProcessing'
import {Typography, Card, Container, Grid, CardContent} from '@material-ui/core'
import DateSelector from './PlotComponents/DateSelector'
import PMSelector from './PlotComponents/PMSelector'
import DeviceSelector from './PlotComponents/DeviceSelector'
import Chart from './PlotComponents/Chart'
import TimeSelector from './PlotComponents/TimeSelector'
import WindDetails from './PlotComponents/WindDetails'
import WindChart from './PlotComponents/WindChart'
import moment from "moment"
import useStyles from './styles'

/* Contains the structure and components of the dashboard view */
const Plot = ({darkMode}) => {
    const classes = useStyles()
    const [time, settime] = useState([0, 144]);
    const [date, setdate] = useState("2021-05-16")
    const [val, setVal] = useState("pm1");
    const [devices, setdevices] = useState([true, true, true])  
    const [points, setpoints] = useState(null)  
    const [windyDay, setwindyDay] = useState("Fri")
    const [pmToWindToggle, setpmToWindToggle] = useState(false)
    const [windPoints, setwindPoints] = useState(null)

    /* Changes plotting data and other dependencies when date is changed */
    useEffect(() => {
        const data = processedData.filter((elem, index) => elem.date === date)
        setpoints(data)
        settime([0,data.length])
        const curDate = moment(date)
        const windData = processedData.filter((elem, index) => curDate.diff(moment(elem.date), 'day') < 7 && curDate.diff(moment(elem.date), 'day') >= 0)
        setwindPoints(windData);
        let windWeekData = new Map()
        windData.forEach((elem, index) => {
            windWeekData.has(elem.date) ? windWeekData.set(elem.date, { sum : windWeekData.get(elem.date).sum + elem["w_DeviceA"], num : windWeekData.get(elem.date).num + 1 })
                                        : windWeekData.set(elem.date, { sum : 0, num : 0})
        })
        const windWeekPoints = []
        windData.forEach((elem) => {
            windWeekPoints.push({date : elem.date, windSpeedA : elem["w_DeviceA"], windSpeedB : elem["w_DeviceB"], windSpeedC : elem["w_DeviceC"]})
        })
        let mostAverageWindDay = "Mon"
        let maxAvgWind = 0
        windWeekData.forEach((value, key) => {
            if(value.num !== 0 && (value.sum/value.num) > maxAvgWind){
                maxAvgWind = (value.sum/value.num)
                mostAverageWindDay = moment(key).format('ddd')
            }
        })
        setwindyDay(mostAverageWindDay)
    }, [date])

    /* Changes plotting time on the line chart when time adjusted */
    useEffect(() => {
        const data = processedData.filter((elem, index) => elem.date === date)
        const timeFilter = data.filter((elem, index) => index >= time[0] && index <= time[1])
        setpoints(timeFilter)
    }, [date, time])
    
    return (
        <Container className={classes.container} display="flex">
            <Grid container alignItems="center">
                <Grid item xs={12} md={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <WindDetails windyDay={windyDay} darkMode={darkMode} pmToWindToggle={pmToWindToggle} setpmToWindToggle={setpmToWindToggle} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography paragraph>Set date here:</Typography>
                                    <DateSelector date={date} setdate={setdate} />
                                    <Typography style={{marginLeft:"10px"}} paragraph>{moment(date).format('dddd')}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        {pmToWindToggle ? null :
                        <Grid item xs={12} md={6}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography paragraph>Select PM to be displayed:</Typography>
                                    <PMSelector val={val} setVal={setVal} />
                                </CardContent>
                            </Card>
                        </Grid>}
                        {pmToWindToggle ? null :
                        <Grid item xs={12} md={6}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography paragraph>Select devices to be displayed:</Typography>
                                    <DeviceSelector devices={devices} setdevices={setdevices} />
                                </CardContent>
                            </Card>
                        </Grid>}
                        {pmToWindToggle ? null :
                        <Grid item xs={12} md={12}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography paragraph>Set time here:</Typography>
                                    <TimeSelector time={time} settime={settime} />
                                </CardContent>
                            </Card>
                        </Grid>}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    {pmToWindToggle ? <WindChart darkMode={darkMode} windPoints={windPoints} />
                                    : <Chart val={val} devices={devices} points={points} time={time} darkMode={darkMode} />}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Plot