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
