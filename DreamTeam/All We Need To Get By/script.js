import API_TOKEN from "./config.js"

let playerName = document.getElementById('city-name')

let playerToSearch = document.getElementById('input-city')
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let inputCity = playerToSearch.value
    console.log(playerToSearch.value)
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_TOKEN}&q=${inputCity}&aqi=no`)
    .then(response => {
        console.log(response.status)
        return response.json()
    })
    .then(data => {
        console.log(data)
        playerName.innerText = data.location.name
        fahrenheitTemp.innerText = Math.round(data.current.temp_f)
        celsiusTemp.innerText = Math.round(data.current.temp_c)
    })

    fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_TOKEN}&q=${inputCity}&dt=2023-03-30
    `).then(response => response.json()).then(data => sunriseElement.innerText =data.astronomy.astro.sunrise)
})