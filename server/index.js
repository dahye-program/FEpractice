const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
  origin: true,
  credentials: true
}))

app.post('/login', (req, res)=>{
  console.log(req);
  console.log(req.body.id);
  console.log(req.body.pw);
})

const server = app.listen(5500, ()=>{
  console.log('Start Server!');
})