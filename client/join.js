const joinId = document.getElementById('id-value');
const joinPw = document.getElementById('pw-value');
const joinName = document.getElementById('name-value');
const joinDate = document.getElementById('date-value');
const goMainBtn = document.getElementById('go-client');
const joinCheckBtn = document.getElementById('join-check');

goMainBtn.addEventListener('click', ()=>{
  location.href = 'client.html'
})

joinCheckBtn.addEventListener('click', async function(){
  await fetch("http://localhost:5500/join",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id : joinId.value,
      pw: joinPw.value,
      name: joinName.value,
      date : joinDate.value
    })
  }).then(res => {
    return res.json()
  }).then(res => {
    console.log(res);
  })
  joinId.value="";
  joinPw.value="";
  joinName.value="";
  joinDate.value="";
})