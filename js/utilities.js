// Common shared function here


// function getFieldInputValueById(){

//     const addMoney = document.getElementById('input-add-money').value;

//     return addMoney

// }


// For Input field
function getFieldInputValueById(id){

    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber

}

// For Text Field

function textFieldById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue)
    return textNumber
}

// button Click hide section and show section

function showSectionById(id){
    //Hide all section
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')

    //Show the section
    document.getElementById(id).classList.remove('hidden')
}




