const addButton = document.querySelector('button')
const form = document.querySelector('form')
const title = document.querySelector('#title')
const price = document.querySelector('#price')

const showProduct = (product) => {
  //   const { id, title, price } = product // деструктурирую чтобы отдельно переменные использовать
  console.log(product)
  const title = product.title
  const price = product.price

  const productContainer = document.createElement('div')

  const titleContainer = document.createElement('h1')
  titleContainer.innerText = title

  const priceContainer = document.createElement('p')
  priceContainer.innerText = price

  productContainer.append(titleContainer, priceContainer)
  document.body.append(productContainer)
}

const addNewProduct = (product, callback) => {
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
    .then((response) => response.json()) // JSON.parse()
    .then((data) => callback(data))
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const product = {
    title: title.value,
    price: price.value,
  }

  addNewProduct(product, (data) => showProduct(data)) //  console.log -->  showProduct()

  title.value = ''
  price.value = ''
})

const objectUser = { firstName: 'Ivan', age: 29 }
const { age } = objectUser // деструктурирует объект
console.log(age)
