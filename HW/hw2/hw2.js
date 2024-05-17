// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let elements = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
console.log(elements);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = {
    book1: {
        title: 'book',
        pageCount: 200,
        genre: 'book',
    },
    book2: {
        title: 'book',
        pageCount: 100,
        genre: 'book',
    },
    book3: {
        title: 'book',
        pageCount: 300,
        genre: 'book',
    }
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let booksA = {
    book1: {
        title: 'book',
        pageCount: 200,
        genre: 'book',
        authors: [
            {
                age: 40,
                name: 'Das'
            }


        ]
    },
    book2: {
        title: 'book',
        pageCount: 100,
        genre: 'book',
        authors: [
            {
                age: 50,
                name: 'Das'
            }


        ]
    },
    book3: {
        title: 'book',
        pageCount: 300,
        genre: 'book',
        authors: [
            {
                age: 60,
                name: 'Das'
            }


        ]
    }
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [{
    user1: {
        name: 'Oleg',
        username: 'Olg2',
        password: 3414556
    },
    user2: {
        name: 'Oleg',
        username: 'Olg2',
        password: 303747
    },
    user3: {
        name: 'Oleg',
        username: 'Olg2',
        password: 6374446
    },
    user4: {
        name: 'Oleg',
        username: 'Olg2',
        password: 63256
    },
    user5: {
        name: 'Oleg',
        username: 'Olg2',
        password: 2345643
    },
    user6: {
        name: 'Oleg',
        username: 'Olg2',
        password: 967452
    },
    user7: {
        name: 'Oleg',
        username: 'Olg2',
        password: 323456
    },
    user8: {
        name: 'Oleg',
        username: 'Olg2',
        password: 36786
    },
    user9: {
        name: 'Oleg',
        username: 'Olg2',
        password: 3456
    },
    user10: {
        name: 'Oleg',
        username: 'Olg2',
        password: 34456
    }
}


]
console.log(users[0].user1.password);
console.log(users[0].user2.password);
console.log(users[0].user3.password);
console.log(users[0].user4.password);
console.log(users[0].user5.password);
console.log(users[0].user6.password);
console.log(users[0].user7.password);
console.log(users[0].user8.password);
console.log(users[0].user9.password);
console.log(users[0].user10.password);


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let weather = [{
    Monday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Tuesday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Wednesday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Thursday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Friday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Saturday: {
        morning: 10,
        midday: 15,
        evening: 9
    },
    Sunday: {
        morning: 10,
        midday: 15,
        evening: 9
    }
}


]

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 4
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

let a = 1
if (a === 0) {
    console.log(a = 0)
}
if (a === 1) {
    console.log(a = 1)
}
if (a === -3) {
    console.log(a = -3)
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59
let quarter1 = 'Перша чверть'
let quarter2 = 'Друга чверть'
let quarter3 = 'Третя чверть'
let quarter4 = 'Четверта чверть'

if (time <= 14) {
    console.log(quarter1)
} else if (time >= 15 && time <= 29) {
    console.log(quarter2)
} else if (
    time >= 30 && time <= 44) {
    console.log(quarter3)
} else if (time >= 45 && time <= 60
) {
    console.log(quarter4)
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15
let decada1 = 'fisrt'
let decada2 = 'second'
let decada3 = 'third'
if (day <= 9) {
    console.log(decada1)
} else if (day >= 10 && day <= 19) {
    console.log(decada2)
} else if (day >= 20 && day <= 31) {
    console.log(decada3)
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numbers = prompt(' Введіть порядковий номер дня тижня')
let weeknum = Number(numbers)
let monday = 1
let tuesday = 2
let wednesday = 3
let Thursday = 4
let Friday = 5
let saturday = 6
let sunday = 7

switch (weeknum) {
    case monday:
        console.log('Понеділок')
        break;
    case tuesday:
        console.log("Вівторок");
        break;
    case wednesday:
        console.log("Середа");
        break;
    case Thursday:
        console.log("Четвер");
        break;
    case Friday:
        console.log("П'ятниця");
        break;
    case saturday:
        console.log("Субота");
        break;
    case sunday:
        console.log("Неділя");
        break;
    default:
        console.log("Неправильний номер дня тижня");

}
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1 = Number(prompt('Введіть перше число'));
let number2 = Number(prompt('Введіть друге число'));


if (number1 > number2) {
    console.log('Максимальне число: ' + number1);
} else if (number2 > number1) {
    console.log('Максимальне число: ' + number2);
} else {
    console.log('Числа рівні: ' + number1);
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let X = null
if (!X) {
    x = "default";
}

console.log(x);
// не дуже зрозумів це завдання

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
