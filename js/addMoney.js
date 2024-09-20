



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
        // const p = document.createElement('p')
        const div = document.createElement('div')
        
        // p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance} Tk.`
        div.innerHTML = `
            
            <h4 class="text-lg font-bold">Add Money</h4>
            <p> Cash In: ${addMoney} Tk. New Balance: ${newBalance} Tk.</p>
            <hr>
        
        `

        document.getElementById('transaction-container').appendChild(div)

    } else {
        alert('Please Enter Valid Pin Number')
    }
    
})


