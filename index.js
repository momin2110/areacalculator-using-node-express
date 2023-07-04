const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const hostName = '127.0.0.1';

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});
app.get('/triangle', (req, res)=>{
    res.sendFile(__dirname + '/trinagle.html');
});
app.get('/circle', (req, res)=>{

    res.sendFile(__dirname + '/circle.html');
});
app.post('/triangle', (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const area = (0.5 * base * height);
    res.send(`Triangle Area is ${area}`);
});
app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const area = (Math.PI * radius * radius);
    res.send(`Circle Area is ${area}`);
});

app.use((req, res)=>{
    res.send(`<h1>404 Error !!! Page not found</h1>`)
})
app.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})
