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
let addPlayerButton = document.querySelector('#addPlayerButton')
console.log(addPlayerButton)

//let click = 0
let playerRoster =[]

let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let player3 = document.getElementById('player3')
let player4 = document.getElementById('player4')
let player5 = document.getElementById('player5')

let errorMessage= document.getElementById('errorMessage')

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
 
addPlayerButton.addEventListener('click', ()=> {
    //console.log(cardTitle.innerText)
    //click+=1
    //console.log(`li${click}`)

    //make an array, keep pushing to it, and print out array
    playerRoster.push(cardTitle.innerText)
    console.log(playerRoster)

    for(let i=0;i<playerRoster.length;i++){
        switch (i) {
            case 0:
                player1.innerText = playerRoster[0]
                break;
            case 1:
                player2.innerText = playerRoster[1]
                break;
            case 2:
                player3.innerText = playerRoster[2]
                break;
            case 3:
                player4.innerText = playerRoster[3]
                break;
            case 4:
                player5.innerText = playerRoster[4]
                break;
        
            default:
                errorMessage.innerText = "You can only have 5 players."
                break;
        }
    }

})
    

