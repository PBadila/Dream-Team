import API_TOKEN from "./config.js"
let form = document.getElementById('playerForm')
let activeImage = document.getElementsByClassName("activeImage")
console.log(activeImage)
let playerID
let playerBirthday
let playerHeightFeet
let playerHeightInches
let playerWeight

let cardTitle = document.querySelector('.card-title')
console.log(`Here is cardTitle: ${cardTitle}`)
let liPID = document.getElementById('pid')
//console.log(liPID)
let liDOB = document.getElementById('dob')
let liHeight = document.getElementById('height')
let liWeight = document.getElementById('weight')

let cardImage = document.querySelector('.card-img-top')


form.addEventListener('submit',()=>{
    event.preventDefault()
    let formData = new FormData(form)
    let playerName = formData.get('playerName')
    console.log(form)
    console.log(playerName)
    //separate first and last name in string
    let name = playerName.split(" ")
    let firstName = name[0].toLowerCase()
    console.log(firstName)
    let firstNameCap = firstName.slice(0,1)
    console.log(firstNameCap)
    firstNameCap=(firstNameCap.toUpperCase())+(firstName.slice(1,firstName.length))
    console.log(firstNameCap)
    let lastName = name[1].toLowerCase()
    console.log(lastName)
    let lastNameCap = lastName.slice(0,1)
    console.log(lastNameCap)
    lastNameCap=(lastNameCap.toUpperCase())+(lastName.slice(1,lastName.length))
    console.log(lastNameCap)

    

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${API_TOKEN}`,
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    }

    fetch(`https://api-nba-v1.p.rapidapi.com/players?name=${lastName}`, options)
	.then(response => response.json())

	.then(data=>{
       console.log(data.response)
       for(let i = 0; i < data.response.length; i++){

            if(data.response[i].firstname.toLowerCase() === firstName){
            //clear out prev data
            cardTitle.innerText=""
            liPID.innerText="ID: "
            liDOB.innerText="DOB: "
            liHeight.innerText="HEIGHT: "
            liWeight.innerText="WEIGHT: "
            //console.log('yeah')
            //console.log(data.response[i].id)
            cardTitle.innerText = `${firstNameCap} ${lastNameCap}`
            playerID = data.response[i].id
            //console.log(playerID)
            liPID.insertAdjacentText(`beforeend`,` ${playerID.toString()}`) 
            playerBirthday = data.response[i].birth.date
            //console.log(playerBirthday)
            liDOB.insertAdjacentText(`beforeend`,`${playerBirthday.toString()}`)
            playerHeightFeet = data.response[i].height.feets
            //console.log(playerHeightFeet)
            playerHeightInches = data.response[i].height.inches
            //console.log(playerHeightInches)
            liHeight.insertAdjacentText(`beforeend`,`${playerHeightFeet.toString()}' ${playerHeightInches.toString()}" `)
            playerWeight = data.response[i].weight.pounds
            //console.log(playerWeight)
            liWeight.insertAdjacentText(`beforeend`,`${playerWeight.toString()} lbs`)
            

            switch (playerID) {
                case 124:
                    cardImage.src="./images/curry.jpeg"
                    break;
                case 153:
                    cardImage.src="./images/durant.jpeg"
                    break;
                case 265:
                    cardImage.src="./images/lebron.jpeg"
                    break;
                case 159:
                    cardImage.src="./images/embiid.jpeg"
                    break;
                case 882:
                    cardImage.src="./images/tatum.jpeg"
                    break;
            
                default:
                    cardImage.src="./images/nbaLogo.png"
                    break;
            }

            
            }
        }
    })




    
    


})
    

