// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s(a, b) {

    let result = a * b;
    console.log(result)
    return result
}

s(5, 5)


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calculateCircleArea(circleRadius) {
    const area = 3.14 * circleRadius ** 2;
    return area;
}

const circleArea1 = calculateCircleArea(5);
console.log(circleArea1);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r ....................Sцил = 2πRH
function calculateCylinderArea (r,h){
    const pi = 3.14
    let result = 2 * pi * r * (r + h);
    return result

}
const cylinderArea = calculateCylinderArea(5, 10);
console.log(cylinderArea);


// - створити функцію яка приймає масив та виводить кожен його елемент


function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


const exampleArray = [1, 2, 3, 4, 5];
printArrayElements(exampleArray);



// створити функцію яка створює параграф з текстом. Текст задати через аргумент


function createParagraph(text) {
    document.body.innerHTML += `<p>${'text'}</p>`;
}


createParagraph('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createListWithItems(text) {
    document.body.innerHTML += `
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `;
}

// Приклад використання функції
createListWithItems('');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListWithItems(text, count) {


    const ul = document.createElement('ul');


    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }


    document.body.appendChild(ul);
}


createListWithItems('Це елемент списку', 3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListFromArray(arr) {

    let listHTML = '<ul>';


    arr.forEach(element => {
        listHTML += `<li>${element}</li>`;
    });


    listHTML += '</ul>';


    document.body.innerHTML += listHTML;
}


const exampleArray = [1, 'Привіт', true, 42, 'Світ', false];
createListFromArray(exampleArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

