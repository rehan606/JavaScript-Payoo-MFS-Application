



// Add Money to Account
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()

    
    // Add Account Number
    const accountNumber = document.getElementById('account-number').value ;
    // Add Money
    const addMoney = document.getElementById('amount').value;
    // Get Pin Number
    const pinNumber = document.getElementById('pin-number').value;

    
    
    if(pinNumber === '1234'){

        //Get The current Balance
        const totalBalance = document.getElementById('total-balance').innerText;
        
        // Add Money input with the balance
        

        const addInputMoney = parseFloat(addMoney);
        const previewsBalance = parseFloat(totalBalance);
        
        
        // Add previews balance and add balance
        const newBalance = previewsBalance + addInputMoney ;

        // Update balance in total balance
        document.getElementById('total-balance').innerText = newBalance;



    } else{
        alert('Please Valid Pin Number')
    }

})

