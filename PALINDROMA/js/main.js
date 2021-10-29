
// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWorld = prompt('inserire una parola')


const reverse = revers(userWorld)

if (userWorld === reverse){
   console.log(' Parola inserita è palindroma');
}
else{
   console.log(' Parola inserita non è palindroma');
   
}

function revers(word) {
   let reverse = '';
   
   for(let i = word.length - 1; i >= 0; i--) {
      reverse += word[i]
   }
   return reverse;
}