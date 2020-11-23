projectData={};

const express= reqire('express');
const app = express();

app.get ("/all",(req,res)=>{
    res.send(projectData)
})
const data = [];
app.post('/data',addData);

function addData (req,res){
    console.log(req.body);
    newData={
        temperature:req.body.temperature,
        date:req.body.date,
        userResponse:req.body.userResponse
    }
    projectData.push(newData);
}

const bodyParser= reqire('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = reqire('cors');
app.use(cors());

app.use(express.static('website'));

//setup server
const port = 3000;
const server = app.listen(port,listening);
function listening(){
    console.log("server runing");
    console.log(`running on localhost: {$port}`);
}

