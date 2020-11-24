projectData={};

const express= require('express');
const app = express();

app.get ("/all",(req,res)=>{
    res.send(projectData)
})
const data = [];
app.post('/data',addData);

function addData (req,res){
    let data = req.body;
    console.log('server side data ',data);
    newData={
        temperature:req.body.temperature,
        date:req.body.date,
        userResponse:req.body.userResponse
    }
    projectData.push(newData);
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

