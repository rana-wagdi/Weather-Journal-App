projectData={};

const express= require('express');
const app = express();




const fakeData ={
    date:1-1,

}
app.get('/fakeWeatherData',getFakeData)
function getFakeData(req,res){
    res.send(fakeData)
}


//get route


app.get('/all',sendData);

function sendData (request,res){
    res.send(projectData);
    projectData=[];
}

app.post('/add',callback);
function callback(req,res){
res.send(projectData);

}
//post route

app.post('/addData',addData);

function addData (req,res){
    let data=req.body;
   
    newEntry = {
        date:req.body.date,
        temperature:req.body.temperature,
        userResponse:req.body.content
    }
    projectData.push(newEntry)
    res.send(projectData)
   

}

const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.use(express.static('website'));

//setup server
const port = 8000;
const server = app.listen(port,listening);
function listening(){
    console.log("server runing");
    console.log(`running on localhost: ${port}`);
}

