import {data} from '../../data'

/* Device data is processed; empty fields and invalid dates are removed */
const dataLength = data.length
const processedData = []

for(let i=0;i<dataLength;i++){
    if(data[i]["t"] === "" 
    || data[i]["t"].startsWith("80")) continue
    else {
        processedData.push(data[i])
    }
}

/* Date and time are seperated. Date converted in YYYY-MM-DD format */
processedData.forEach((dataPoint) => {
    const dateAndTime = dataPoint["t"].split(",")
    dataPoint["date"] = dateAndTime[0].replaceAll("/", "-")
    dataPoint["date"] = "20" + dataPoint["date"]
    dataPoint["time"] = dateAndTime[1]
    delete dataPoint.t
})

export default processedData