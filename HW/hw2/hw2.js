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

let weather= [{
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
if(x !== 0){console.log('Вірно')}
else {console.log('Невірно')}

let a 
