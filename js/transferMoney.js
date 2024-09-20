

document.getElementById('btn-transfer-money').addEventListener('click', function(event){
    event.preventDefault()

    const transferAccount = getFieldInputValueById('input-transfer-amount-number')
    const transferMoney = getFieldInputValueById('input-transfer-money')
    const pinNumber = getFieldInputValueById('input-transfer-pin')
    
    if(isNaN(transferMoney)){
        alert('Invalid Input')
        return ;
    }

    if(pinNumber === 1111){

        const balance = textFieldById('account-balance');
        

        if(transferMoney > balance){
            alert('You Have incefficient Balance')
            return
        }

        const newBalance = balance - transferMoney
        document.getElementById('account-balance').innerText = newBalance

        const div = document.createElement('div')
        div.innerHTML = `
            <h4 class="text-lg font-bold">Balance Transfer</h4>
            <p>Transfer Account Number is ${transferAccount} Transfer Amount is ${transferMoney} Tk. New Balance ${newBalance}</p>
            <hr>
        `
        document.getElementById('transaction-container').appendChild(div)

       
    } else {
        alert('Please Enter a Valid Pin Number')
    }
})