let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


let baseURL="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=";
let  APIkey ="77a651bad1324b64ccbf6392884bb908";
const enterZip = document.getElementById('zip').nodeValue;

document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
    getWeather(baseURL,enterZip,APIkey)

    }
const getWeather= async(baseURL,)