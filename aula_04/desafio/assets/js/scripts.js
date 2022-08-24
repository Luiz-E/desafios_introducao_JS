const botao = document.querySelector("button")
const input = document.querySelector("#input")
const lista = document.querySelector(".lista")

botao.addEventListener("click", () => {
    if (input.value === "") return
    adicionar(input.value)
    input.value = ""
})

function adicionar(novaTarefa) {
    const container = document.createElement("div")

    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")

    const nodeTarefa = document.createTextNode(novaTarefa)
    const tarefa = document.createElement("label")
    tarefa.appendChild(nodeTarefa)

    container.appendChild(checkBox)
    container.appendChild(tarefa)
    lista.appendChild(container)
}
