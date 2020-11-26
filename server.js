projectData=[];

const express= require('express');
const app = express();






app.post('/add',callback);
function callback(req,res){
res.send(projectData)
projectData=[]
}
app.get('/all',sendData);

function sendData (request,response){
    response.send(projectData);
};

app.post('/addData',addData);

function addData (req,res){
    
    console.log(req.body);
    newData={
        date:req.body.date,
        temperature:req.body.temperature,
        content:req.body.content
    }
    projectData.push(newData);
    res.send(projectData)
    console.log(projectData);
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

