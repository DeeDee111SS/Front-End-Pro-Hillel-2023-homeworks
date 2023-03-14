'use strict';

const yearOfBirth = +prompt('Какой год Вашего рождения?', '');

if (yearOfBirth !== 0) {

    const cityOfResidence = prompt('В каком городе Вы живете?', '');

    if (cityOfResidence !== null) {

        const favouriteSport = prompt('Какой Ваш любимый вид спорта?', '');

        if (favouriteSport !== null) {

            let city = 0;
            let sport = 0;

            switch (cityOfResidence) {
                case 'Киев':
                    city = 'Ты живешь в столице Украины.';
                    break; 
                case 'Москва':
                    city = 'Ты живешь в столице России.';
                    break; 
                case 'Минск':
                    city = 'Ты живешь в столице Белоруссии.';
                    break; 
                default: 
                    city = `Ты живешь в городе ${cityOfResidence}.`
            }

            switch (favouriteSport) {
                case 'плавание':
                    sport = 'Круто! Хочешь стать как Давид Попович?';
                    break; 
                case 'бокс':
                    sport = 'Круто! Хочешь стать как Александр Усик?';
                    break; 
                case 'тяжелая атлетика':
                    sport = 'Круто! Хочешь стать как Лаша Талахадзе?';
                    break; 
                default: 
                    sport = 'Круто!:)'
            }

            alert (`Тебе ${2023 - yearOfBirth}. ${city} ${sport}`)

        } else {
            alert('Жаль, что Вы не захотели ввести свой любимый вид спорта.');
        }

    } else {        
        alert('Жаль, что Вы не захотели ввести город, в котором живете.');
    }

} else {
    alert('Жаль, что Вы не захотели ввести свой год рождения.');
}




