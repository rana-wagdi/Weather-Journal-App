projectData=[]; //should be in array not {}


// Express to run server and routes
const express= require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser= require('body-parser')//should be in the top
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


app.use(express.static('website')); // the projects main folder



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
   console.log(req.body);
    newEntry = {
        date:req.body.date,
        temperature:req.body.temperature,
        userResponse:req.body.userResponse
    }
    projectData.push(newEntry)
    res.send(projectData)
   

}



//setup server
const port = 8000;
const server = app.listen(port,listening);
function listening(){
    console.log("server runing");
    console.log(`running on localhost: ${port}`);
}

