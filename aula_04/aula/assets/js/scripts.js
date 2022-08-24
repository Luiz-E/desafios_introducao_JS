let numeroWrapper = document.querySelector("#currentNumber")
var currentNumber = 0

document.querySelector("[name ='subtrair']").addEventListener("click", () => {
    currentNumber--
    numeroWrapper.innerHTML = currentNumber
})

document.querySelector("#adicionar").addEventListener("click", () => {
    currentNumber = currentNumber + 1
    numeroWrapper.innerHTML = currentNumber
})
