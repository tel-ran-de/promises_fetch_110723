const fetchProduct = (
  callback // callback  в параметр
) =>
  fetch('https://dummyjson.com/products/1')
    .then((response) => response.json())
    .then((data) => callback(data)) // заменяет коносльлог

const showProduct = (productData) => {
  const productContainer = document.createElement('div')
  document.body.append(productContainer)
  const productTitle = document.createElement('h1')
  productTitle.innerText = productData.title
  productContainer.append(productTitle)
}

fetchProduct((data) => showProduct(data))

// данные в четырех форматах
// 1. строка - "hello" 'vald@gmail.com'
// 2. JSON - объект / массив в виде строки JSON.stringify()
// 3. FormData - результат отправления форм -
// 4. Blob - картинка/файл в форме зашифрованного кода
