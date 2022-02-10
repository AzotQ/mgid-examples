const chooseLang = document.querySelector('#choose-language');
const elemToShow = document.querySelector('#choose-element');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPubTime(lang, replaceElement) {
    replaceElement.forEach((item) => {
        let randomHour = getRandomNumber(1, 23);
        let textVariant = '';

        switch (lang) {
            case 'rus':
                if (randomHour == 1 || randomHour == 21) {
                    textVariant = 'час';
                } else if (randomHour == 2 || randomHour == 3 || randomHour == 4 || randomHour == 22 || randomHour == 23) {
                    textVariant = 'часа';
                } else {
                    textVariant = 'часов';
                }
                item.innerHTML = `${randomHour} ${textVariant} назад`;
                break;
            case 'ukr':
                if (randomHour == 1 || randomHour == 21) {
                    textVariant = 'годину';
                } else if (randomHour == 2 || randomHour == 3 || randomHour == 4 || randomHour == 22 || randomHour == 23) {
                    textVariant = 'години';
                } else {
                    textVariant = 'годин';
                }
                item.innerHTML = `${randomHour} ${textVariant} тому`;
                break;
            case 'eng':
                if (randomHour == 1) {
                    textVariant = 'hour';
                } else {
                    textVariant = 'hours';
                }
                item.innerHTML = `${randomHour} ${textVariant} ago`;
                break;
            case 'esp':
                if (randomHour == 1) {
                    textVariant = 'hora';
                } else {
                    textVariant = 'horas';
                }
                item.innerHTML = `hace ${randomHour} ${textVariant}`;
                break;
            default:
                console.log('error, wrong language parameter selected for the function');
                break;
        }
    })
}