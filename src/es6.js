"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [surname, name, patronymic] = fio.split(" ")
    return `${name} ${surname}`
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const set = new Set(array)
    return [...set]
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length === 0) return false;

    let maxSalary = array[0];
    let minSalary = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxSalary) {
            maxSalary = array[i];
        }
        if (array[i] < minSalary) {
            minSalary = array[i];
        }
    }

    if (minSalary === 0) {
        throw "Зарплата не может быть нулевой!";
    }

    return maxSalary / minSalary;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами

class Dictionary {
    constructor() {
        this.words = new Map();
    }

    addWord(key, value) {
        if (typeof key === 'string' && typeof value === 'string') {
            this.words.set(key, value);
        }
    }
    getSize() {
        return this.words.size
    }

    getWord(key) {
        return this.words.get(key);
    }

    deleteWord(key) {
        this.words.delete(key);
    }

    getAllWords() {
        return [...this.words.keys()]
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};