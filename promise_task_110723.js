// 1.1 Что выведет следующий код
console.log('start')

const promise11 = new Promise((resolve, reject) => {
  console.log(1)
})

const fn1 = () => {
  console.log('3')
}

console.log('end')

// 1.2 Какой результат выполнения этого кода?

console.log('start')

const promise12 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(200)
})

promise12.then((response) => {
  console.log(response)
})

console.log('end')

// 1.3 Какой результат выполнения этого кода?

console.log('start')

const promise13 = new Promise((resolve, reject) => {
  console.log(1)
})

promise13.then((res) => {
  console.log(2)
})

console.log('end')

// 1.4 Какой результат выполнения этого кода?

console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')

// 1.5

function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 2000)
  })
}

job().then((data) => console.log(data))

// 1.6

function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject('error')
    } else if (data % 2 === 0) {
      setTimeout(() => {
        reject('even')
      }, 2000)
    } else {
      setTimeout(() => {
        resolve('odd')
      }, 1000)
    }
  })
}

job('aasd')
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

job(2)
  .then((data) => console.log(data))
  .catch((error) => console.log('rejected: ' + error))

job(3).then((data) => console.log(data))

// 1.7
console.log('start')

const promise1 = new Promise((resolve, reject) => {
  console.log(1)

  resolve(200)
  console.log(3)
})

promise1.then((res) => {
  console.log(res)
})

console.log('end')

//1.8
console.log('start')

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
  })

console.log('middle')

fn().then((res) => {
  console.log(res)
})

console.log('end')

//1.9
const promise = new Promise((resolve, reject) => {
  console.log(1)

  setTimeout(() => {
    console.log('timerStart')
    resolve('success')
    console.log('timerEnd')
  }, 0)

  console.log(2)
})

promise.then((res) => {
  console.log(res)
})

console.log(4)

//1.10
console.log(1)

setTimeout(() => console.log(2))

Promise.resolve().then(() => console.log(3))

Promise.resolve().then(() => setTimeout(() => console.log(4)))

Promise.resolve().then(() => console.log(5))

setTimeout(() => console.log(6))

console.log(7)

// 1.11
let promise1111 = new Promise(function (resolve, reject) {
  resolve(1)

  setTimeout(() => resolve(2), 1000)
})

promise.then((data) => console.log(data))
