// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Pari e Dispari v.0.0.2
const btn = document.querySelector('.btn__send')

btn.addEventListener('click', function(){
	let parDis = document.querySelector('.input__pari-dispari').value
	
	let userNumber = parseInt(document.querySelector('.input__number').value)
	console.log(userNumber)

	const computerNumber = randomNum(1 , 5)
	console.log(computerNumber)



	while((parDis !== 'pari') && (parDis !== 'dispari')){
		alert('Inserire PARI O DISPARI')
	}

	while(userNumber > 5 || userNumber < 0 || isNaN(userNumber)){
		alert('Inserire numero da 1 a 5')
	}



	const somma = computerNumber + userNumber
	console.log(somma)

	let pariOrDispari = pariDispari(somma)

	const resultText = document.querySelector('.main-screen__result')
	const resultNum = document.querySelector('.main-screen__number')
	
	if (pariOrDispari === parDis){
		resultText.innerHTML = 'HAI VINTO'
		resultNum.innerHTML = somma
	}
	else{
		resultText.innerHTML = 'HAI PERSO'
		resultNum.innerHTML = somma

	}

})


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