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

// fetchUserByComment(1)
const showPostAndComments = (title, body, comments) => {
  const postContainer = document.createElement('div')
  const titleContainer = document.createElement('h1')
  titleContainer.innerText = title
  const bodyContainer = document.createElement('p')
  bodyContainer.innerText = body
  postContainer.append(titleContainer, bodyContainer)
  document.body.append(postContainer)

  console.log(comments) // массив объектов
  comments.forEach((value) => {
    // выводим body и выводим userName
    console.log(value.user.username)
    // const { body, user } = value
    const commentBody = document.createElement('p')
    commentBody.innerText = value.body
    const userName = document.createElement('h3')
    userName.innerText = value.user.username
    postContainer.append(userName, commentBody)
  })
  // is not iterable - объект
  // число строку
}
// параметры аргументы
// синхронный код блокирует работу выполнение скрипта

const fetchPostAndComment = async (id, callback) => {
  // деструктурировали массив ответов
  const [postResponse, commentsResponse] = await Promise.all([
    fetch(`https://dummyjson.com/posts/${id}`),
    fetch(`https://dummyjson.com/comments/post/${id}`),
  ])

  const { title, body } = await postResponse.json()
  const { comments } = await commentsResponse.json()

  callback(title, body, comments)
}
// fetchPostAndComment(1, showPostAndComments)
fetchPostAndComment(1, (title, body, comments) => showPostAndComments(title, body, comments))
