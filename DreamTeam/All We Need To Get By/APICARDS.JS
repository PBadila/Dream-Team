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

let remove1 = document.createElement('button')
remove1.setAttribute('class', 'removeButt')
remove1.setAttribute('type', 'submit')

let remove2 = document.createElement('button')
remove2.setAttribute('class', 'removeButt')
remove2.setAttribute('type', 'submit')

let remove3 = document.createElement('button')
remove3.setAttribute('class', 'removeButt')
remove3.setAttribute('type', 'submit')

let remove4 = document.createElement('button')
remove4.setAttribute('class', 'removeButt')
remove4.setAttribute('type', 'submit')

let remove5 = document.createElement('button')
remove5.setAttribute('class', 'removeButt')
remove5.setAttribute('type', 'submit')



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
form.reset()

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
                player1.appendChild(remove1)
                remove1.innerText= "REMOVE"
                console.log(remove1)
                break;
            case 1:
                player2.innerText = playerRoster[1]
                player2.appendChild(remove2)
                remove2.innerText= "REMOVE"
                break;
            case 2:
                player3.innerText = playerRoster[2]
                player3.appendChild(remove3)
                remove3.innerText= "REMOVE"
                break;
            case 3:
                player4.innerText = playerRoster[3]
                player4.appendChild(remove4)
                remove4.innerText= "REMOVE"
                break;
            case 4:
                player5.innerText = playerRoster[4]
                player5.appendChild(remove5)
                remove5.innerText= "REMOVE"
                break;
        
            default:
                errorMessage.innerText = "You can only have 5 players."
                break;
        }
    }

})
    
remove1.addEventListener('click',()=>{
    console.log('clicked')
    player1.innerText=""
    playerRoster = playerRoster.splice(1,1)
    console.log(playerRoster)
})

remove2.addEventListener('click',()=>{
    console.log('clicked')
    player2.innerText=""
    playerRoster=playerRoster.splice(2,1)
    console.log(playerRoster)
})

remove3.addEventListener('click',()=>{
    console.log('clicked')
    player3.innerText=""
    playerRoster=playerRoster.splice(3,1)
    console.log(playerRoster)
})

remove4.addEventListener('click',()=>{
    console.log('clicked')
    player4.innerText=""
    playerRoster=playerRoster.splice(4,1)
    console.log(playerRoster)
})

remove5.addEventListener('click',()=>{
    console.log('clicked')
    player5.innerText=""
    playerRoster=playerRoster.splice(5,1)
    console.log(playerRoster)
})
