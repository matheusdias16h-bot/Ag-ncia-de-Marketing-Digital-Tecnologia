// Navbar toggle
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('active');
}

// Countdown
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 5); // 5 dias de contagem regressiva
let timerInterval = setInterval(function(){
  let now = new Date().getTime();
  let distance = countdownDate - now;
  if(distance < 0){ clearInterval(timerInterval); return; }
  let days = Math.floor(distance/(1000*60*60*24));
  let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
  let seconds = Math.floor((distance%(1000*60))/1000);
  document.getElementById("days").innerText = days.toString().padStart(2,'0');
  document.getElementById("hours").innerText = hours.toString().padStart(2,'0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2,'0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2,'0');
},1000);

// POPUP
function showPopup(){ document.getElementById('popupLead').style.display='flex'; }
function closePopup(){ document.getElementById('popupLead').style.display='none'; }

// POPUP FORM SUBMIT
document.getElementById("popupForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("popupName").value;
  const email = document.getElementById("popupEmail").value;
  console.log(`Lead popup: ${name} - ${email}`);
  document.getElementById("popupSuccess").innerText="Obrigado! Seu cadastro foi recebido.";
  this.reset();
  setTimeout(closePopup,2000);
});

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(`Contato: ${name} - ${email} - ${message}`);
  document.getElementById("contactSuccess").innerText="Obrigado! Mensagem enviada.";
  this.reset();
});
