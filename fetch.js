const fetchProduct = (id, callback) =>
  fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => response.json()) // из строчного варианта JSON получить обычный объект
    .then((data) => callback(data)) // с нашими данными что-то сделаем
    .catch((err) => console.log(err, 'this product doesnot exist'))

const showProduct = (productData) => {
  const productContainer = document.createElement('div')
  document.body.append(productContainer)

  const productTitle = document.createElement('h1')
  productTitle.innerText = productData.title

  const description = document.createElement('p')
  description.innerText = productData.description

  // выводим цену
  const price = document.createElement('p')
  price.innerText = `Price: ${productData.price}$`
  // выводим картинку
  const image = document.createElement('img')
  image.src = productData.images[0]

  productContainer.append(productTitle, description, price, image) // закрепляем
}

fetchProduct(30, (product) => showProduct(product))

// возвращает промис
const fetchAnotherProduct = (id) =>
  fetch(`https://dummyjson.com/products/${id}`).then((response) => response.json())

// промис ол принимает два вызова функции с разными id
// обработать ответ и вывести данные в браузере
Promise.all([fetchAnotherProduct(3), fetchAnotherProduct(5)]).then((result) => {
  // result массив с ответами промисов
  console.log(result)
  showProduct(result[0]) // к первому элемента массива
  showProduct(result[1]) // ко второму элементу массива
})
