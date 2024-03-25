var inputvalue=document.querySelector("#cityinput")
var btn=document.querySelector("#add")
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector("#description")
var temp=document.querySelector("#temp")
var wind=document.querySelector("#wind")
apik="63a90ae96d390ec37d6c1252f5a86e1a"
function convertion(val){
    return(val-273).toFixed(3)
}
btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
//https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=63a90ae96d390ec37d6c1252f5a86e1a
    .then(res=>res.json())
    .then(data=>{
        var nameVal=data['name']
        var descrip=data['weather'][0]['description']
        var tempature=data['main']['temp']
        var wndspeed=data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameVal}</span>`
        temp.innerHTML=`Temperature:<span>${convertion(tempature)}C</span>`
        description.innerHTML=`Sky Conditions:<span>${descrip}</span>`
        wind.innerHTML=`Wind Speed:<span>${wndspeed}Km/h</span>`

    })
   .catch(err=>alert('you ented wrong city name')) 
})