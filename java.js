function displayWeather(pcity){

    const content11 = document.querySelector(".content11")
    const img1 = document.querySelector(".imgday1")
    const condition1 = document.querySelector(".condition1")
    const temp1 = document.querySelector(".temp1")
    const humidity1 = document.querySelector(".humidity1")
    const wind1 = document.querySelector(".wind1")
    const date1 = document.querySelector(".day11 span")
    
    const img2 = document.querySelector(".imgday2")
    const condition2 = document.querySelector(".condition2")
    const temp2 = document.querySelector(".temp2")
    const humidity2 = document.querySelector(".humidity2")
    const wind2 = document.querySelector(".wind2")
    const weekday2 = document.querySelector(".weekday2")



    const img3 = document.querySelector(".imgday3")
    const condition3 = document.querySelector(".condition3")
    const temp3 = document.querySelector(".temp3")
    const humidity3 = document.querySelector(".humidity3")
    const wind3 = document.querySelector(".wind3")
    const weekday3 = document.querySelector(".weekday3")



    const img4 = document.querySelector(".imgday4")
    const condition4 = document.querySelector(".condition4")
    const temp4 = document.querySelector(".temp4")
    const humidity4 = document.querySelector(".humidity4")
    const wind4 = document.querySelector(".wind4")
    const weekday4 = document.querySelector(".weekday4")



    const img5 = document.querySelector(".imgday5")
    const condition5 = document.querySelector(".condition5")
    const temp5 = document.querySelector(".temp5")
    const humidity5 = document.querySelector(".humidity5")
    const wind5 = document.querySelector(".wind5")
    const weekday5 = document.querySelector(".weekday5")



    const img6 = document.querySelector(".imgday6")
    const condition6 = document.querySelector(".condition6")
    const temp6 = document.querySelector(".temp6")
    const humidity6 = document.querySelector(".humidity6")
    const wind6 = document.querySelector(".wind6")
    const weekday6 = document.querySelector(".weekday6")



    const img7 = document.querySelector(".imgday7")
    const condition7 = document.querySelector(".condition7")
    const temp7 = document.querySelector(".temp7")
    const humidity7 = document.querySelector(".humidity7")
    const wind7 = document.querySelector(".wind7")
    const weekday7 = document.querySelector(".weekday7")


    content11.innerHTML= pcity
    const apiKey = "7b23acfd56614597980153421230304";
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${pcity}&days=7`
    let results = []
    fetch(url).then((response)=> response.json()).then((info)=>{

        if(info.error){
           alert("Sorry, Weather is data not available for the entered city");

        }
        else{
        const data = info.forecast.forecastday;
            for (let day in data) {
                console.log(day)
                const avgtemp = data[day].day.avgtemp_c;
                const condition = data[day].day.condition.text;
                const windkph = data[day].day.maxwind_kph
                const conditionImage = data[day].day.condition.icon;
                const date = data[day].date;
                const humidity = data[day].day.avghumidity;
                const dayData = [avgtemp,condition,windkph,conditionImage,date,humidity]
                results.push(dayData)
    }
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dateString2 = results[1][4];
    const dateString3 = results[2][4]
    const dateString4 = results[3][4]
    const dateString5 = results[4][4]
    const dateString6 = results[5][4]
    const dateString7 = results[6][4]

    const date2 = new Date(dateString2); 
    const date3 = new Date(dateString3); 
    const date4 = new Date(dateString4); 
    const date5 = new Date(dateString5); 
    const date6 = new Date(dateString6);  
    const date7 = new Date(dateString7);  

    const conditionText = "Patchy rain possible";
    if(results[0][1] == conditionText) cond1 = "Patchy rain";
    else cond1 = results[0][1]
    if(results[1][1] == conditionText) cond2 = "Patchy rain";
    else cond2 = results[1][1]
    if(results[2][1] == conditionText) cond3 = "Patchy rain";
    else cond3 = results[2][1]
    if(results[3][1] == conditionText) cond4 = "Patchy rain";
    else cond4 = results[3][1]
    if(results[4][1] == conditionText) cond5 = "Patchy rain";
    else cond5 = results[4][1]
    if(results[5][1] == conditionText) cond6 = "Patchy rain";
    else cond6 = results[5][1]
    if(results[6][1] == conditionText) cond7 = "Patchy rain";
    else cond7 = results[6][1]
    
    
    img1.setAttribute('src', `https:${results[0][3]}`);
    condition1.innerHTML = cond1;
    temp1.innerHTML = `Temperature: ${results[0][0]} \u00B0C`;
    humidity1.innerHTML = `Humidity: ${results[0][5]}`;
    wind1.innerHTML = `Wind Speed: ${results[0][2]} Km/h`;
    date1.innerHTML = results[0][4]

    img2.setAttribute('src', `https:${results[1][3]}`);
    condition2.innerHTML = cond2;
    temp2.innerHTML = `Temperature: ${results[1][0]} \u00B0C`;
    humidity2.innerHTML = `Humidity: ${results[1][5]}`;
    wind2.innerHTML = `Wind Speed: ${results[1][2]} Km/h`;
    weekday2.innerHTML = daysOfWeek[date2.getDay()]

    img3.setAttribute('src', `https:${results[2][3]}`);
    condition3.innerHTML = cond3;
    temp3.innerHTML = `Temperature: ${results[2][0]} \u00B0C`;
    humidity3.innerHTML = `Humidity: ${results[2][5]}`;
    wind3.innerHTML = `Wind Speed: ${results[2][2]} Km/h`;
    weekday3.innerHTML = daysOfWeek[date3.getDay()]


    img4.setAttribute('src', `https:${results[3][3]}`);
    condition4.innerHTML = cond4;
    temp4.innerHTML = `Temperature: ${results[3][0]} \u00B0C`;
    humidity4.innerHTML = `Humidity: ${results[3][5]}`;
    wind4.innerHTML = `Wind Speed: ${results[3][2]} Km/h`;
    weekday4.innerHTML = daysOfWeek[date4.getDay()]


    img5.setAttribute('src', `https:${results[4][3]}`);
    condition5.innerHTML = cond5;
    temp5.innerHTML = `Temperature: ${results[4][0]} \u00B0C`;
    humidity5.innerHTML = `Humidity: ${results[4][5]}`;
    wind5.innerHTML = `Wind Speed: ${results[4][2]} Km/h`;
    weekday5.innerHTML = daysOfWeek[date5.getDay()]


    img6.setAttribute('src', `https:${results[5][3]}`);
    condition6.innerHTML = cond6;
    temp6.innerHTML = `Temperature: ${results[5][0]} \u00B0C`;
    humidity6.innerHTML = `Humidity: ${results[5][5]}`;
    wind6.innerHTML = `Wind Speed: ${results[5][2]} Km/h`;
    weekday6.innerHTML = daysOfWeek[date6.getDay()]


    img7.setAttribute('src', `https:${results[6][3]}`);
    condition7.innerHTML = cond7;
    temp7.innerHTML = `Temperature: ${results[6][0]} \u00B0C`;
    humidity7.innerHTML = `Humidity: ${results[6][5]}`;
    wind7.innerHTML = `Wind Speed: ${results[6][2]} Km/h`;
    weekday7.innerHTML = daysOfWeek[date7.getDay()]
}

    }).catch(error => {
        console.log('Error:', error);
        
    });

        


}

function displayInputValue() {
    const inputBox = document.querySelector(".input1");
    let City = (inputBox.value==="") ? "Delhi" : inputBox.value;
    displayWeather(City)
   
  }

  
displayWeather("Delhi")


