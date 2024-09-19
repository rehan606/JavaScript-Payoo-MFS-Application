
// Add Money Feature Button
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden')

    document.getElementById('transaction-history').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')

    document.getElementById('add-money').style.borderColor = '#0874F2'
})

// Add Money Feature Button
document.getElementById('cash-out').addEventListener('click', function(){
    //Cash Out from visible
    document.getElementById('cash-out-form').classList.remove('hidden')
    //Add Money Form Hide
    document.getElementById('add-money-form').classList.add('hidden')
    // Transaction history Remove
    document.getElementById('transaction-history').classList.add('hidden')
    
    document.getElementById('cash-out').style.borderColor = '#0874F2'
})