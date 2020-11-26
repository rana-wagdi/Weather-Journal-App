
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


let baseURL="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=";
let  APIkey ="77a651bad1324b64ccbf6392884bb908";
const enterZip = document.getElementById('zip').value;


document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
    const feelings= document.getElementById('feelings').value;
    getWeather(baseURL,enterZip,APIkey)
    .then(function(data){
        console.log(data);
        postData('/add',{date:newDate,temperature:data.list[0].main.temp,userResponse:feelings})
        
        updateUI()
    })
    }

    async function postData(url = '', data = {}) {
        console.log(data);
        const response= await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)         
      });
    
        try {
          const newData = await response.json();
          console.log(newData);
          return newData
        }catch(error) {
        console.log("error", error);
        }
       
    }
   
    
const getWeather= async(baseURL,zip,key)=>{
    const res= await fetch(baseURL+zip+key)



  //  const res =await fetch ('/newWeatherData')
    try{
        const data= await res.json();
        console.log(data)
return data 

    }
    catch(error) {
        console.log("error",error);
    }
}

const updateUI =async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json()
        document.getElementById('date').innerHTML = `Date: ${allData[0].date}`;
        document.getElementById('temp').innerHTML =`temprture: ${allData[0].temperature}`;
        document.getElementById('content').innerHTML = `I feel: ${allData[0].content}`;
    }catch(error){
        console.log("error",error);
    }
}