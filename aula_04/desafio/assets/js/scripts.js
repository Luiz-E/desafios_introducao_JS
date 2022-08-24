const botao = document.querySelector("button")
const input = document.querySelector("#input")
const lista = document.querySelector(".lista")

botao.addEventListener("click", () => {
    adicionar()
})

function adicionar() {
    const container = document.createElement("div")
    const checkBox = document.createElement("input")
    const p = document.createElement("label")
    p.setAttribute("for", input.value)
    checkBox.setAttribute("type", "checkbox")
    container.appendChild(checkBox)
    container.appendChild(p)
    lista.appendChild(container)
}
