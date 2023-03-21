/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const btnStart = document.getElementById('start');

const countDown = document.getElementById('countDown');

let count = 5;

countDown.innerHTML = count;

const numbers = document.getElementById('numbers');



//Funzione per generare l'array dei numeri casuali
function generateNumbers() {
    const nums = [];
    while (nums.length < 5) {
        const num = getRndNumber(1, 5);
        if (!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums;
}

//Funzione per generare l'array di numeri casuali
function generateNums() {
    const nums = [];
    while (nums.length < 5) {
        const num = getRndNumber(1, 99);  
        if(!nums.includes(num)) {
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

    for (let i = 0; i < nums.length; i++) {        
        numbers.innerHTML += `<span>${nums[i]}</span>`;
    }

    const timer = setInterval(() => {

        let message = '';

        if (count === 0) {
            clearInterval(timer);
            message = 'Il tempo è terminato';
            countDown.innerHTML = message;
            numbers.classList.add('d-none');
        } else {
            count--;
            countDown.innerHTML = count;
        }


    }, 1000);

};



