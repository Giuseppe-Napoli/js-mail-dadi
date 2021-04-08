var n_utente = Math.ceil(Math.random() * 6);
console.log(n_utente);
document.getElementById('punto_utente').innerHTML = n_utente;

var n_pc = Math.ceil(Math.random() * 6);
console.log(n_pc);
document.getElementById('punto_pc').innerHTML = n_pc;

if(n_utente > n_pc){
  console.log('vinto');
  document.getElementById('game').innerHTML = "HAI VINTO!";
}else if(n_utente == n_pc){
  console.log('pareggio');
  document.getElementById('game').innerHTML = "HAI PAREGGIATO!";
}else{
  console.log('perso');
  document.getElementById('game').innerHTML = "HAI PERSO!";
} 
