const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    deners: [],
    privat: false
}; //создан объект и в нем различные свойства 

for(let i = 0; i < numberOfFilms; i++){
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
}

 

console.log(personalMovieDB); 


// if (4 == 9) {
//     console.log ('OK');
// } else 
//     console.log ('Error');


//     const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log ('Many');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('ok') : console.log('error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('no');
//         break;
//     case 100:
//         console.log('no');
//         break;
//     case 51:
//         console.log('yes');
//         break;
//     default:
//         console.log('nonono');
//         break;
// } // вернет 'nonono' по умолчанию



// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } //вернет Я сыт!



// console.log (hamburger && fries);// вернет true



// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } //ничего не вернет, тк fries нет



// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Уходим!')
// } // вернет Уходим! 


// console.log(1 && 0);//вернет 0, тк оператор && возвращает false
// console.log(1 && 5);// вернет 5, тк оператор && возвращает последнее значение, если все true
// console.log(0 && 'fghjk');// вернет 0, тк 0 false
// console.log(null && 5);// вернет null по той же схеме


// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// // console.log(hamburger === 3 && cola && fries) //вернет значение 0, потому что нет логических операторов!!

// if (hamburger || cola || fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Уходим!')
// }//Вернет все сыты, тк оператор || (или) выполняет условие хотя бы при одном true


// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// } // цикл выводит от 50 до 55


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// } //?????????????????????????

// let i = 2;
// while (i <= 16) {
//     console.log (i) ;
//     if (i % 2 === 0)
//         i++

// } // БЕСКОНЕЧНЫЙ ЦИКЛ

// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55); //do означает сделай что то. выводит в консоль от 50 до 54 while (пока что то) num меньше 55


// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }


// for (let i = 5; i < 11; i++) {
//     console.log (i);
// }
// for (let i = 20; i >= 10; i--) {
//     if (i === 12) { 
//         break;
//     }
//     console.log (i); 
// }
// for (i = 2; i <= 10; i++) {
//     if (i % 2 == 0)
//     console.log (i);
// }
