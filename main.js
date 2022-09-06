//se conectando a api
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '19',
}

const {url, type, id} = apiData //simplicando a obtenção de dados
const apiUrl = `${url}${type}/${id}` //juntando toda url e salvando


//pegando a resposta em json
fetch(apiUrl)
    .then( (response) => response.json())
    .then( (pokemon) => generateHTML(pokemon))



//gerando o html 
const generateHTML = (data) => {
    console.log(data)
    const html = `
        <div class="card-content">
            <div class="name">${data.name}</div>
            <img src=${data.sprites.front_default}>
            <div class="details">
            <span> Height: ${data.height}</span>
            <span> Weight: ${data.weight}</span>
            </div>
        </div>
    `

    //linkando o html do js com o html do index
    const pokemonDiv = document.querySelector('.card')
    pokemonDiv.innerHTML = html
}