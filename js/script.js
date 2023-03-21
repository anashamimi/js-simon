const countDown = document.getElementById('countDown');

let count = 5;

countDown.innerHTML = count;

const timer = setInterval (() => {
    if (count === 0) {
        clearInterval(timer);
        count = 'Il tempo è terminato';
    }

    count--;
    countDown.innerHTML = count;
}, 1000);