// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const parDis = prompt('inserire pari o dispari')
const userNumber = parseInt(prompt('inserire numero da 1 a 5'))
const computerNumber = randomNum(1 , 5)
console.log(computerNumber)


let somma = computerNumber + userNumber
console.log(somma)
let pariOrDispari = pariDispari(somma)

if (pariOrDispari === parDis){
	alert('hai vinto')
}
else{
	alert('hai perso')
}




function pariDispari(number) { 
	if(number % 2 === 0){
		return 'pari';
	}
	else{
		return 'dispari'
	}
}


function randomNum(min , max) {
	const rand = Math.floor(Math.random() * (max - min + 1)) + min;
	return rand;
}