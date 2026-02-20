<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Strangers Chat</title>

<style>
body{
  margin:0;
  font-family:Arial;
  background:#0f172a;
  color:white;
  display:flex;
  flex-direction:column;
  height:100vh;
}

header{
  background:#020617;
  padding:15px;
  text-align:center;
  font-size:22px;
  font-weight:bold;
}

.container{
  flex:1;
  display:flex;
  flex-direction:column;
  padding:10px;
}

#login-box{
  text-align:center;
}

select,input{
  padding:10px;
  margin:5px;
  border-radius:5px;
  border:none;
}

button{
  padding:10px 15px;
  margin:5px;
  border:none;
  border-radius:5px;
  background:#2563eb;
  color:white;
  cursor:pointer;
}

button:hover{
  background:#1d4ed8;
}

#chat-box{
  flex:1;
  background:#020617;
  padding:10px;
  border-radius:10px;
  overflow-y:auto;
  margin-top:10px;
}

.message{
  margin:5px;
  padding:8px;
  background:#1e293b;
  border-radius:5px;
}

#input-area{
  display:flex;
}

#message-input{
  flex:1;
}
</style>
</head>

<body>

<header>🌐 Strangers Chat</header>

<div class="container">

<div id="login-box">
<input type="text" id="username" placeholder="Enter name or guest">
<select id="gender">
<option value="">Select Gender</option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
<br>
<button onclick="startChat()">Start</button>
<button onclick="skipChat()">Skip</button>
<button onclick="nextChat()">Next</button>
</div>

<div id="chat-box"></div>

<div id="input-area">
<input type="text" id="message-input" placeholder="Type message">
<button onclick="sendMessage()">Send</button>
</div>

</div>

<script>
let chatting=false;

function startChat(){
  chatting=true;
  addMessage("System","Connected to stranger...");
}

function skipChat(){
  addMessage("System","Stranger skipped.");
}

function nextChat(){
  addMessage("System","Finding new stranger...");
}

function sendMessage(){
  if(!chatting){
    alert("Start chat first");
    return;
  }

  let msg=document.getElementById("message-input").value;
  if(msg=="") return;

  addMessage("You",msg);
  document.getElementById("message-input").value="";

  setTimeout(()=>{
    addMessage("Stranger","Hello 👋");
  },1000);
}

function addMessage(sender,text){
  let box=document.getElementById("chat-box");
  let div=document.createElement("div");
  div.className="message";
  div.innerHTML="<b>"+sender+":</b> "+text;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}
</script>

</body>
</html>
