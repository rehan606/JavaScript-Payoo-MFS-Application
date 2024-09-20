

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()


    const cashOut = getFieldInputValueById('input-cash-out')
    const pinNumber = getFieldInputValueById('input-cash-out-pin')

    //Form Validation
    if(isNaN(cashOut)){
        alert('Invalid Input')
        return ;
    }

    if(pinNumber === 1111){

        const balance = textFieldById('account-balance');

        if(cashOut > balance){
            alert('You Do not have incefficient balance')
            return;
        }
        const newBalance = balance - cashOut

        document.getElementById('account-balance').innerText = newBalance

        const div = document.createElement('div')
        div.innerHTML = `
            
            <h4 class="text-lg font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
            <hr>
        `

        document.getElementById('transaction-container').appendChild(div)

    } else {
        alert('Please Enter a Valid Pin Number')
    }
})