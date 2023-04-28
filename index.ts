let countryInput:any=document.querySelector(".countryInput")
let enterButton=document.querySelector(".enterButton") as HTMLButtonElement
let tempDegree:any=document.getElementById("tempDegree") 
let countryName:any=document.getElementById("countryName") 
let humidity:any=document.getElementById("humidity") 
let windSpeed:any=document.getElementById("windSpeed") 

enterButton.onclick=function (){
const apiKey = '863242cfb2b1d357e6093d9a4df19a4b';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${countryInput.value}`;

fetch(apiUrl+ `&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    tempDegree.innerHTML=data.main.temp
    countryName.innerHTML=data.name
    humidity.innerHTML=data.main.humidity
    windSpeed.innerHTML=data.wind.speed
})
  .catch(error => console.error('Error fetching weather', error));
}
