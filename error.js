// Функция которая получает тип данных и делает массив
const str = '1111'
const num = 1111

function toArray(data) {
  try {
    return [...data]
  } catch (error) {
    return [] // по пустому массиву можно проитерироваться
  }
}

const newArr = toArray(str)
//newArr.forEach((el) => console.log(el))
const arr2 = toArray(num) // TypeError
arr2.forEach((el) => console.log(el)) //
// data is not iterable

function getElementText(selector) {
  try {
    const element = document.querySelector(selector)
    return element.innerText
  } catch (error) {
    console.log(error.message)
  }
}

// throw new Error
// throw - бросать / выбрасывать
// throw выбрасывает исключение
// если мы используем throw то нужен try catch - чтобы исключение ловить
// throw для того чтобы создавать кастомные ошибки (custom)
// Мы сами придумываем и сообщаем об ошибке пользователю или другому разработчику

function devide(firstNumber, secondNumber) {
  if (secondNumber === 0) throw new Error('Нельзя делить на 0')
  // если второе число равно 0 то вывести в консоль
  // делить на ноль нельзя
  return firstNumber / secondNumber
}

try {
  console.log(devide(10, 0))
} catch (error) {
  // console.log(error.message) // message встроенное свойство
  // console.log(error.name)
  // console.log(error.stack)
  // в глобальный объект ошибки
}

// undefined - если функция ничего не возвращает нет return

// написать функцию
// async await которая фетчит один пост
// параметр функции номер поста- число
// возвращается обработанный ответ

const fetchPost = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      return data
    } else if (!response.ok) {
      throw new Error(`пост не найден`)
    }
  } catch (error) {
    console.log(error.message)
  }
}
// 1. Мы думаем какие могут быть ошибки
// 2. Нашли ошибку
// 3. Описываем сценарий
// 4. Выбрасываем исключение throw new Error ()
// 5. ловим исключение
// 6. Показываем его либо пользователю (либо другому разработчику)

//fetchPost(1) // ok = true, status  =200
// ok = false status = 404
// если ошибка 400 - 500 то фетч отрабатывает
// запрос проходит
// тело запроса не возвращается
// ok false
// status - 400 500

// network error нету при 400 500

// пишем функцию асинхронную
// async await
// которая принимает два параметра id user'a callback фукнция
// мы обрабатываем запрос от сервера
// и данные прокидываем в callback
const fetchUser = async (id, callback) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`)
    if (!response.ok) throw new Error('user not found')
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
    const errorElement = document.createElement('h1')
    errorElement.innerText = error.message
    document.body.append(errorElement)
  }
}
fetchUser(200, (data) => console.log(data))
// try catch -
// try проверяем status.ok
// ok - true вызываем callback
// ok - false - throw new Error('user not found')
// catch обрабатываем ошибку
// выводим на экран используя innerHTML

// вывести innetHTML к div
// error.message на экран
