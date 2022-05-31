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
  // DB에 SELECT 쿼리문 날려서 받아온 값과 비교
  if(req.body.id === 'dahye' && req.body.pw === '1234'){
    return res.json('Login OK');
  }
  else return res.json('Login False');
})

app.post('/join', (req, res)=>{
  // DB에 INSERT
  // console.log(req.body.id);
  // console.log(req.body.pw);
  // console.log(req.body.name);
  // console.log(req.body.date);
  return res.json('Join OK');
})

const server = app.listen(5500, ()=>{
  console.log('Start Server!');
})