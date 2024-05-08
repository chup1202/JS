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
