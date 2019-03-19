// console.log("registration.js loaded")

var submitButton = document.getElementById('submit-btn')
var firstName = document.getElementById('first-name')
// any time I use firstName it will connect to this variable. It's binding! Not meant to put value of the name

// Trigger the click button
submitButton.onclick = functon () {
    console.log('clicked')

    var firstName = firstNameUI.value
    var lastName = lastNameUI.value 

    users.push(new User(firstName, lastName))

    console.log(users)


    //var firstName = document.getElementById('firstName').value
    //console.log(firstName)

}

// Create new user and add to array 
// users.push(new User(firstName, lastName, username, password)) - they are not defined yet