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
    return res.json('ok');
  }
  else return res.json('false');
})

const server = app.listen(5500, ()=>{
  console.log('Start Server!');
})