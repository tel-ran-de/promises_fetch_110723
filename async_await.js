const fetchUser = (id) => {
  fetch(`https://dummyjson.com/comments/${id}`) // получаем данные комментария
    .then((response) => response.json())
    .then((data) => fetch(`https://dummyjson.com/users/${data.user.id}`))
    .then((response) => response.json())
    .then((data) => console.log(data))
}

// async - await
// синтаксический сахар - это какая-то фича которая ничего новго не вносит
// но упрощает работу
// работает всегда в связке
// работает с функциями
// функция async всегда возвращает промис

const fetchUserByComment = async (id) => {
  const response = await fetch(`https://dummyjson.com/comments/${id}`)
  const commentData = await response.json()

  const userId = commentData.user.id

  const responseUser = await fetch(`https://dummyjson.com/users/${userId}`)
  const userData = await responseUser.json()
  console.log(userData)
}

fetchUserByComment(1)

// параметры аргументы

// синхронный код блокирует работу выполнение скрипта
