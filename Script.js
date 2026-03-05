/* =====================
STRESS RESET BUTTON
===================== */

const stressBtn = document.getElementById("stressBtn")
const modal = document.getElementById("resetModal")

if(stressBtn){

const timer = document.getElementById("timer")
const close = document.getElementById("closeReset")

stressBtn.onclick = ()=>{

modal.classList.remove("hidden")

let time = 60

timer.innerText = time

const interval = setInterval(()=>{

time--
timer.innerText = time

if(time<=0){
clearInterval(interval)
}

},1000)

close.onclick = ()=>{

modal.classList.add("hidden")
clearInterval(interval)

}

}

}

/* =====================
MOOD CHECK IN
===================== */

let mood = null

document.querySelectorAll(".emojiBtn").forEach(btn=>{

btn.onclick=()=>{
mood=btn.innerText
}

})

const saveBtn = document.getElementById("saveMood")

if(saveBtn){

saveBtn.onclick=()=>{

const stress = document.getElementById("stressLevel").value

const entry={
mood,
stress,
date:new Date().toLocaleDateString()
}

let history=JSON.parse(localStorage.getItem("moods"))||[]

history.push(entry)

localStorage.setItem("moods",JSON.stringify(history))

alert("Mood Saved")

}

}

/* =====================
POSITIVITY WALL
===================== */

const wall = document.getElementById("messageWall")

function loadMessages(){

if(!wall) return

let messages = JSON.parse(localStorage.getItem("messages"))||[]

wall.innerHTML=""

messages.forEach(msg=>{

const div=document.createElement("div")

div.className="bg-white p-4 rounded shadow"

div.innerText=msg

wall.appendChild(div)

})

}

loadMessages()

const postBtn = document.getElementById("postMessage")

if(postBtn){

postBtn.onclick=()=>{

const input=document.getElementById("messageInput")

if(input.value==="") return

let messages=JSON.parse(localStorage.getItem("messages"))||[]

messages.push(input.value)

localStorage.setItem("messages",JSON.stringify(messages))

input.value=""

loadMessages()

}

}
