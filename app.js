const watch = document.querySelector('.watch');
const clrBtns = document.querySelectorAll('button[data-clr]');

clrBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const clr = btn.dataset.clr;
        watch.src = `./img/${clr}.png`;
    });
});

const time = document.querySelector('.time');

function timeCountdown() {

    return setInterval(() => {
        let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    if(minutes < 10) {
        minutes = `0${minutes}`;
    };
    
    let period;
    if(hour < 13) {
        period = 'AM';
    } else {
        period = 'PM';
    };

    switch (hour) {
        case 13:
            hour = 1;
            break;
        case 14:
            hour = 2;
            break;
        case 15:
            hour = 3;
            break;
        case 16:
            hour = 4;
            break;
        case 17:
            hour = 5;
            break;
        case 18:
            hour = 6;
            break;
        case  19:
            hour = 7;
        case 20:
            hour = 8;
            break;
        case 21:
            hour = 9;
            break;
        case 22:
            hour = 10;
            break;
        case  23:
            hour = 11;
        case  0:
            hour = 12;
    };

    time.textContent = `${hour} : ${minutes} ${period}`;
    })

};

function heartRate() {
    return time.textContent = 120;
}

let countdown = timeCountdown();

const timeBtn = document.querySelector('.timeBtn');
timeBtn.addEventListener('click', () => countdown = timeCountdown());

const heartRateBtn = document.querySelector('.heartRateBtn');
heartRateBtn.addEventListener('click', () => {
    clearInterval(countdown);
    countdown = heartRate();
})

