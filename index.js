const textInput = document.createElement('h2')
const tagInput = document.createElement('input')
textInput.innerText = "Esse é um texto para o Input Abaixo"
tagInput.placeholder = "Digite seu texto aqui"
const form = document.querySelector('form')
form.appendChild(textInput)
form.appendChild(tagInput)

const article = document.querySelector("article");
const h1 = document.createElement("h1")
const paragrafo2 = document.createElement('p');
const text = document.createElement("a")

h1.innerText = "Título do Post"
paragrafo2.innerText = "Descrição do Post"
text.innerText = "Ver post completo"

article.appendChild(h1)
article.appendChild(paragrafo2)
article.appendChild(text)

const div = document.querySelector("div")
const paragrafo = document.createElement('p');
paragrafo.innerText = "Olá, eu sou uma tag criada pelo JS"
div.appendChild(paragrafo)