const watch = document.querySelector('.watch');
const clrBtns = document.querySelectorAll('button[data-clr]');

clrBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const clr = btn.dataset.clr;
        watch.src = `./img/${clr}.png`;
    });
});

//  features 
class UI {
    static showTime() {
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
    
        let timeInitials;
    
        if(hour < 13) {
            timeInitials = 'AM';
        } else {
            timeInitials = 'PM';
        };
    
        if(minute < 10) {
            minute = `0${minute}`;
        };
    
        switch(hour) {
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
            case 19:
                hour = 7;
                break;
            case 20:
                hour = 8;
                break;
            case 21:
                hour = 9;
                break;
            case 22:
                hour = 10;
                break;
            case 23:
                hour = 11;
                break;
            case 0:
                hour = 12;
                break;
        };
    
        watchDisplay.innerHTML = `
            <span class="text-warning">${hour} : ${minute} ${timeInitials}</span>
        `;
    };

    static showHeartRate() {
        watchDisplay.innerHTML = `
            <span class="text-warning pe-1"><i class="fa-solid fa-heart-pulse"></i></span>
            <span class="text-warning">120</span>
        `;
    };
};

const watchDisplay = document.querySelector('.watch-display');
let error = 0;

document.addEventListener('DOMContentLoaded', showWatchDisplay());
document.querySelector('.time-btn').addEventListener('click', () => {
    error = 0;
    showWatchDisplay();
});

document.querySelector('.heart-rate-btn').addEventListener('click', () => {
    error++;
    showWatchDisplay();
});


function showWatchDisplay() {
    const time = setInterval(() => {
        if(error > 0) {
            clearInterval(time);
            UI.showHeartRate();
        } else {
            UI.showTime();
        }
    
    }, 1000);
};

