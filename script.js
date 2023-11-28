const { resolve } = require('path')

console.log('one')
console.log('two')
setTimeout(() => console.log('timeout'), 1000)
const start = Date.now()

while (true) {
  const current = Date.now()
  if (current - start > 5000) {
    break
  }
}

console.log('three')
setTimeout(() => console.log('timeout'), 1000)
// V8 специальный двигатель который запускает JS
// внутри v8 есть инструменты которые позволяют выполнять асинхр код
// синхронный код и асинхронный timeout

console.log('start')

const promise12 = new Promise((resolve, reject) => {
  // в объявлении функции
  console.log(1)
  resolve(200) // двойка не просто так написана
})

showuserdata()
fetch('getuserdata')
setTimeout(() => showDialogWindow())

// вызов! микротаска --> в обход синхронного кода
promise1.then((response) => {
  console.log(response)
})

console.log('end')
// Функция создает промис = function expression
const fetchData = new Promise(function (resolve, reject) {
  console.log('fetching data...')
  setTimeout(() => {
    const response = {
      status: 404,
      body: {
        userName: 'Ivan',
      },
    }

    reject(response.status) // меняет значение result на аргумент внутри
    // она выполняется в случаю успешного выполнения
    // значени промиса меняется на response.body
  }, 1000)
})

console.log(fetchData)
// в блоке catch ловлю ошибку
fetchData.then((result) => console.log(result)).catch((error) => console.log('error: ', error))

// promise имеет свои методы - .then() .catch() .finally()
// array methods - forEach , filter
// Promise - обещание
// resolve - успешно выполнить
// reject отклонить
// fetch - получить
// then - затем/ далее
// catch - поймать

const sum = (a, b) => a + b
console.log(sum(3, 4))

// новый промис создаем
// который умешно выполняется через три секунды
// и выводит в консоль 'success'

// выполняем через then()
// первый аргумент функция, второй время в миллисекундах
setTimeout(() => {}, 3000)
const showUserData = (data) => (root.innerHTML = data)
const newPromise = new Promise((resolve, reject) => setTimeout(() => resolve('success'), 3000))
newPromise.then((result) => console.log(result))

// новый промис который через 1 секунду вовращает 'success' а через 2 секунды возвращает error
// внутри промиса два аргумента функции resolve reject
// каждая из них меняет значение в setTimeout()
// два таймаута рядом

// убираем
// finally в конце концов / наконец-то КОНЕЦ
// блок независимый который сам по себе
// finally будет выполняться в любом случае независимо от результата
// манипуляция с DOM  деревом
// спиннер загрузки, нам спиннер надо убрать

// потребителя который изменяет  result
// catch всегда пишется в конце цепочки

// finally

// Promise.all() - ждем результат от всех промисов
// принимает в качестве аргумента - массив промисов
// возвращает массив
// порядок остается прежним
// если один из промисов будет с ошибкой - то all завершится с ошибкой

// написать промис который вернуть через полсекунды результат success - успешное выполнение
// resolve ==> меняют значение промиса

Promise.all([firstPromise, secondPromise, prom1])
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

const prom1 = new Promise((resolve, reject) => {
  // запускаем спиннер
  if (Math.random() > 0.5) {
    setTimeout(() => resolve('success'), 1000)
  } else {
    setTimeout(() => reject('error'), 1000)
  }
})

const firstPromise = new Promise((resolve) => setTimeout(() => resolve('success500'), 0))
const secondPromise = new Promise((resolve, reject) => reject(2))
// выводит первый выполненный (или успешно или отрицательно)
Promise.race([firstPromise, secondPromise])
  .then((result) => console.log('race', result))
  .catch((error) => console.log('error', error))
// первый УСПЕШНЫЙ результат
Promise.any([firstPromise, secondPromise])
  .then((result) => console.log('any', result))
  .catch((error) => console.log('error', error))
