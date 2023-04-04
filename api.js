const express = require("express");
const axios = require("axios")

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, ()=> console.log("listening on Port "+ port));

app.get('/', (req,res)=>{
    axios.get("https://api.weatherapi.com/v1/forecast.json?key=7b23acfd56614597980153421230304&q=Chennai&days=7").then((res1)=>{

        const data = res1.data.forecast.forecastday;
        const results = []
        for (let day in data) {
            console.log(day)
            const avgtemp = data[day].day.avgtemp_c;
            const condition = data[day].day.condition.text;
            const windkph = data[day].day.maxwind_kph
            const conditionImage = data[day].day.condition.icon;
            const date = data[day].date;
            const humidity = data[day].day.avghumidity;
            console.log(`Max Temp: ${maxtemp}, Min Temp: ${mintemp}, Condition: ${condition}, Date: ${date}, Humidity: ${humidity}`);
            results.push(`Avg Temp: ${avgtemp}, Condition: ${condition}, Date: ${date}, Humidity: ${humidity}, Max WindSpeed: ${windkph}`)
          }
        res.send(results)
          
      
       
    })
})


