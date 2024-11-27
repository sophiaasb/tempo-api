//dom
const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const texto_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const chave = 'e17cf6df15ea623f562bd787a1e19608'

// evento
botao.addEventListener('click', buscar)

//função
async function buscar(){
    nome_cidade = cidade.value

    const dados = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
    .then(resposta=>resposta.json())

    texto_cidade.textContent = 'Tempo em ${dados.name}'
    temperatura.textContent = '${dados.main.temp}°C'
    previsao.textContent = '${dados.weather[0].description}'
    imagem.src = 'https//openweathermap.org/img/en/${dados.weather(0)}

    console.log(dados)
}