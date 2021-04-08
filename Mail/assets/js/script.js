var list_email = [
  "Paolo@alice.it",
  "Giuseppe@gmail.com",
  "Martina@hotmail.it",
  "Giovanni@alice.it",
  "Anna@virgilio.it",
  "Francesca@hotmail.it",
  "Antonio@alice.it",
  "Filippo@gmail.com",
  "Caterina@virgilio.it",
  "Alessandra@hotmail.it"
]

var email_to_found = prompt('Inserisci la tua email');
var email_presente = false;

for(var i=0; i<list_email.length; i++){
  var email_utente= list_email[i];
  console.log(email_utente);
  if(email_utente === email_to_found){
    email_presente = true;
    console.log('EMAIL TROVATA');
    break
  }
}

var msg_output = "Gentile utente la sua email " + email_to_found;
if(email_presente){
  console.log('Email accettata');
  document.getElementById('email').innerHTML = msg_output + " è stata accettata.";
}else{
  console.log('Email rifiutata');
  document.getElementById('email').innerHTML = msg_output +" è stata rifiutata, riprova.";
}