import API_TOKEN from "./config.js"
let form = document.getElementById('playerForm')
let activeImage = document.getElementsByClassName("activeImage")
console.log(activeImage)
// let playerNameButton = document.getElementById('playerNameButton')

form.addEventListener('submit',()=>{
    event.preventDefault()
    let formData = new FormData(form)
    let playerName = formData.get('playerName')
    console.log(form)
    console.log(playerName)
    //separate first and last name in string
    //let name = playerName.split(" ")
    //let firstName = name[0].toLowerCase()
    //console.log(firstName)
    //let lastName = name[1].toLowerCase()
    //console.log(lastName)
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${API_TOKEN}`,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    fetch(`https://api-nba-v1.p.rapidapi.com/players?search=${playerName}`, options)

	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    // fetch(`https://api-nba-v1.p.rapidapi.com/players?firstname=${firstName}&lastname=${lastName}`, options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
    
    // fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?id=236&season=2020', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
})


