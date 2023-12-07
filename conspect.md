данные в четырех форматах

1. строка - "hello" 'vald@gmail.com'
2. JSON - объект / массив в виде строки JSON.stringify()
3. FormData - результат отправления форм -
4. Blob - картинка/файл в форме зашифрованного кода

fetch('https://dummyjson.com/products/add', {
// Добавить продукт на сервер
method: 'POST', // метод отправляет данные на сервер
headers: { 'Content-Type': 'application/json' }, // какой тип данных мы отправляем
body: JSON.stringify({
// передаем нашу информацию
title: 'BMW Pencil',
price: 100,
description: 'the best product',
rating: '5',
}),
})
.then((response) => response.json()) // Приходит ответ в формате JSON
.then(console.log) // данные выводим в консоль

ERROR

//вблок try пишем проблемный код
try {
//Reference error
a++
console.log('after error')
} catch (error) {
console.log('SORRY: ', error)
}
// name - тип ошибки
// TypeError
// SyntaxError
// ReferenceError

// message - тело ошибки

// stack - место в котором ошибка возникла

// код в блоке try после ошибки не отрабатывает
// он сразу перекидывает в catch
// если нет ошибок, то catch не отрабатывает

// try - попытка попытаться
// catch - ловить
// uncaught - непойманный
// uncaght - ошибка не в блоке catch

// Когда код выдает непойманную ошибку
// скрипт перестает выполняться

console.log('CODE WORKS')

const userName = 'Anna'
const greeting = `Hello! ${userName}` // интерполяция
// в фигурных написать js код валидный
const calc = `${30 + 30}`
