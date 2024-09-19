
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()

    // Cash Out
    const cashOut = document.getElementById('cash-out-amount').value;
    // Get Pin Number
    const pinNumber = document.getElementById('pin-number').value;


    if(pinNumber === '1234'){

        const totalBalance = document.getElementById('total-balance').innerText;

        const cashOutMoney = parseFloat(cashOut);
        const previewsBalance = parseFloat(totalBalance);
       

        const newBalance = previewsBalance - cashOutMoney;
        console.log(newBalance)

        // Update balance in total balance
        document.getElementById('total-balance').innerText = newBalance;
        


    } else {
        alert('Please Enter a Valid Pin Number')
    }
})