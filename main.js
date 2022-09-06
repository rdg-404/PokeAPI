const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
}

const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`

console.log(apiUrl)