

// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault()

//     const addMoney = document.getElementById('input-add-money').value;
//     const addMoneyNumber = parseFloat(addMoney)
//     const pinNumber = document.getElementById('input-pin-number').value ;


//     //Pin Validatation
//     if(pinNumber === '1111'){

//         const balance = document.getElementById('account-balance').innerText;
//         const balanceNumber = parseFloat(balance)

//         const newBalance = balanceNumber + addMoneyNumber  ;

//         document.getElementById('account-balance').innerText = newBalance

//     } else {
//         alert('Enter valid Pin Number')
//     }
//     console.log(addMoney, pinNumber)
// })




document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()

    const addMoney = getFieldInputValueById('input-add-money')
    const pinNumber = getFieldInputValueById('input-pin-number')

    //Form Validation
    if(isNaN(addMoney)){
        alert('Invalid Input')
        return ;
    }

    // Pin Validation
    if(pinNumber === 1111){
        const balance = textFieldById('account-balance')
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance

        // Add to Transaction history
        const p = document.createElement('p')
        
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance} Tk.`

        document.getElementById('transaction-container').appendChild(p)

    } else {
        alert('Please Enter Valid Pin Number')
    }
    
})


