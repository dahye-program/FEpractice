const loginId = document.getElementById('id-value');
const loginPw = document.getElementById('pw-value');
const loginBtn = document.getElementById('login');
const joinBtn = document.getElementById('join');
  
loginBtn.addEventListener('click', async function(){
  await fetch("http://localhost:5500/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({
      id : loginId.value,
      pw : loginPw.value 
    })
  }).then(res =>{
    return res.json()
  }).then(res=>{
    console.log(res);
  })
})

joinBtn.addEventListener('click', ()=>{
  location.href = 'join.html'
})