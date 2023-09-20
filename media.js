//Cria referência ao from e elementos de resposta do programa

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um ouvine

form.addEventListener("submit"),(e) =>{
e.preventDeFault()     //evita o envio do form
}