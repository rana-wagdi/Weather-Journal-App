
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


let baseURL="http://api.openweathermap.org/data/2.5/forecast?id=524901&units=imperial&appid=";
let  APIkey ="77a651bad1324b64ccbf6392884bb908";
const enterZip = document.getElementById('zip').value;


document.getElementById('generate').addEventListener('click',performAction);

function performAction(e){
    e.preventDefault();
    const feelings= document.getElementById('feelings').value;
    getWeather(baseURL,enterZip,APIkey)
    .then(function(data){
        
        postData('/addData',{date:newDate,temperature:data.list[0].main.temp,userResponse:feelings});
       
       
        updateUI()
    });
    };

    /* Function to POST data */

    async function postData(url = '', data = {}) {
        console.log(JSON.stringify(data));
        const response= await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
            
        }  );    
    
        try {
          const newData = await response.json();
          console.log(newData);
          return newData
        }catch(error) {
        console.log("error", error);
        }
       
    }

   
    
const getWeather= async(baseURL,zip,key)=>{
    const response= await fetch(baseURL+zip+key)


    try{
        const data= await response.json();
        console.log(data)
    return data 

    }
    catch(error) {
        console.log("error",error);
    }
}

const updateUI =async () => {
    const request = await fetch('/all');
    console.log(request);
    try{
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML =  allData[0].date;//we should select the numper of data we need to do
        document.getElementById('temp').innerHTML = allData[0].temperature;
        document.getElementById('content').innerHTML = allData[0].userResponse;
    }catch(error){
        console.log("error",error);
    }
}