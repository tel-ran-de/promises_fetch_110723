const fetchProduct = (callback) =>
  fetch('https://dummyjson.com/products/1')
    .then((response) => response.json()) // из строчного варианта получить объект
    .then((data) => {
      console.log(data)
      callback(data)
    })

const showProduct = (productData) => {
  const productContainer = document.createElement('div')
  document.body.append(productContainer)
  const productTitle = document.createElement('h1')
  productTitle.innerText = productData.title
  productContainer.append(productTitle)
}

fetchProduct((product) => showProduct(product))
