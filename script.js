'use strict'

/* 1. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное. */

/* let arr = [1, 5,- 3, -8, 7, -6];
let arrPos = [];

for (let i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {
        arrPos.push(arr[i]);
    }
}

function isPositive(a) {
    if (a >= 0) return true;
    else return false;
}

console.log(arrPos); */

/* 2. Напишите функцию range(), принимающую два аргумента: начало и конец диапазона, и возвращающую массив, который содержит все числа из диапазона, включая начальное и конечное. Третий необязательный аргумент функции range() – шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом: например, range(5, 2, -1) возвращает [5, 4, 3, 2]. */


/* function range(min, max, step = 1) {
    let arr = [];
    for (min; min <= max; min += step) {
        arr.push(min);
    }
    return arr;
}

console.log(range(-10, -1, 3)); */

/* 3. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число). */

function getDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(getDivisors(16))