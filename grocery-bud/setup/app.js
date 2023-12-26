// ****** SELECT ITEMS **********
const alertMessage = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit",addItem);


// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault()
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag ) {
    console.log("add item to the list");
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert('please enter value',"danger")
    
  }
}

function displayAlert(text,action){
    alertMessage.textContent = text;
    alertMessage.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(function(){
        alertMessage.textContent = '';
        alertMessage.classList.remove(`alert-${action}`)
    
    },1000)

}


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
