/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/

/*
what is needed?
-buton on a clik should add information to the table 
-how to get information form input fields and their values
-firstName, lastName, favoriteColor in a variable
-find a way to get the number value
-find a way to get the values form the form when submitted

getElementByID: retreive value 
-needs ID on the values
*/

const formButton = document.getElementById('formSubmit')//this targets the submit button to trigger the function

let number = 0//this holds the value of the number for each row that is created

formButton.addEventListener('click', (event) => {//this is going to grab the value of each input and append it to the form
    event.preventDefault()//this will prevent everything from erasing on refresh
    //variables to hold the values of the form 
    let firstName = document.getElementById("firstName").value//grabs the value of each input
    let lastName = document.getElementById("lastName").value
    let favoriteColor = document.getElementById("favoriteColor").value

    //append to form

    let newTableRow = document.createElement('tr')//this is the parent that will hold each TD that is created

    let numberNode = document.createElement('td')//this creates a new number in the table row
        numberNode.innerHTML = number
        newTableRow.append(numberNode)
        
    let firstNameNode = document.createElement('td')//this will create the new td for the row
    firstNameNode.innerHTML = firstName//this will grab the text and post it on the DOM 
    newTableRow.append(firstNameNode)//this will add the new row to the existing form

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let favoriteColorNode = document.createElement('td')
    favoriteColorNode.innerHTML =favoriteColor
    newTableRow.append(favoriteColorNode)

    //console.log(newTableRow) this is used to test and debug the code as i write it

    document.getElementById('tBody').appendChild(newTableRow)//this will append the new row to the table body

    document.getElementById('firstName').value = ''//this will clear each input after it is logged
    document.getElementById('lastName').value = ''
    document.getElementById('favoriteColor').value = ''

    number++//this will add a number everytime the submit button is clicked
});