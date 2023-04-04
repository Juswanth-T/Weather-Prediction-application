function location(){
    fetch("https://api.ipdata.co/?api-key=1f4052c3649af43032ed28e4dd298128c35459e3acccf27dfcaaef41").then((response)=>{
        response.json()
    }).then((data)=>{
        console.log(data.city)
    }).catch((err)=>{
        console.log(err)
    })
}
