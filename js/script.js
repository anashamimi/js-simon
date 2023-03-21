/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const btnStart = document.getElementById('start');

const countDown = document.getElementById('countDown');

let count = 10;

countDown.innerHTML = count;

const numbers = document.getElementById('numbers');

const input = document.getElementById('input');

const risultato = document.getElementById('risultato');

//Funzione per generare l'array di numeri casuali
function generateNums() {
    const nums = [];
    while (nums.length < 5) {
        const num = getRndNumber(1, 99);
        if (!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums;
}

btnStart.addEventListener('click', play);

function play(e) {
    e.preventDefault();

    nums = generateNums();
    console.log(nums);

    numbers.innerHTML = '';

    for (let i = 0; i < nums.length; i++) {
        numbers.innerHTML += `<span>${nums[i]}</span>`;
    }

    const timer = setInterval(() => {

        let message = '';
        numbers.classList.remove('d-none');

        if (count === 0) {
            clearInterval(timer);
            message = 'Il tempo è terminato';
            countDown.innerHTML = message;
            numbers.classList.add('d-none');
            input.classList.remove('d-none');
        } else {
            count--;
            countDown.innerHTML = count;
        }


    }, 1000);

};



const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', send);

function send(e) {

    let corretto = 0;
    let sbagliato = 0;
    message = '';

    e.preventDefault();
    const userNum1 = parseInt(document.getElementById('userNum1').value);
    const userNum2 = parseInt(document.getElementById('userNum2').value);
    const userNum3 = parseInt(document.getElementById('userNum3').value);
    const userNum4 = parseInt(document.getElementById('userNum4').value);
    const userNum5 = parseInt(document.getElementById('userNum5').value);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === userNum1 || nums[i] === userNum2 || nums[i] === userNum3 || nums[i] === userNum4 || nums[i] === userNum5) {
            corretto++;
        } else {
            sbagliato++
        }
    }

    if (corretto > sbagliato) {
        message = `Congratulazioni!!! ne hai fatte ${corretto} corrette e ${sbagliato} sbagliate`;
    } else if (sbagliato > corretto) {
        message = `Mmmhhh!!! ne hai sbagliate ${sbagliato} e ${corretto} sono corrette`;
    }

    console.log(corretto);
    console.log(sbagliato);
    

    risultato.innerHTML = `<p class="text-center text-warning">${message}</p>`;

    numbers.classList.remove('d-none');
}



