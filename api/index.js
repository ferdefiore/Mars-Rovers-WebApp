const bodyParser = require('body-parser')
const express = require('express')
const https = require('https')
const cors = require('cors')
const http = require('http')
const path = require('path')
const fs = require('fs')

const privateKey  = fs.readFileSync(path.join(__dirname, '/selfsigned.key'), 'utf8')
const certificate  = fs.readFileSync(path.join(__dirname, '/selfsigned.crt'), 'utf8')

var credentials = {key: privateKey, cert: certificate};

const app = express()

app.use(cors())

app.use(bodyParser.json());

app.get('/api/',(req,res) => {
    console.log("New Request:")
    const strFinal = `${req.query.pw} ${req.query.ph} ${req.query.rx} ${req.query.ry} ${req.query.rc} ${req.query.inst}`
    
    console.log("Request Information")
    console.log(strFinal)

    var {spawn} = require('child_process');
    const workerProcess = spawn('java', ['-jar', 'MarsRovers.jar',strFinal]);

    workerProcess.stdout.on('data', function (data) {  
        res.send(data)
        console.log('stdout: ' + data);  
     });  
    workerProcess.stderr.on('data', function (data) {  
        console.error('stderr: ' + data);  
     });  
    workerProcess.on('close', function (code) {  
        console.log('child process exited with code ' + code);  
     });
})

app.use('/home',express.static(path.join(__dirname,'../public/')))


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
httpServer.listen(8080,()=> console.log("Listen on: http://localhost:8080/home/index.html"));
httpsServer.listen(8443,()=> console.log("Listen on: https://localhost:8443/home/index.html"));