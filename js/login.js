
// Step: 1 Set Event Handler
document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault() // Step: 2 prevent reloding browser
    

    // Step: 3 Get The Phone Number and Pin Number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value; 
    
    // Step: 4 Validation Phone and Pin Number
    if(phoneNumber === '7' && pinNumber === '1234'){
        
        // Step: 5 Go To Home Page
        window.location.href = "index.html"
    } else {
        alert('Enter valid Number and Pin')
    }
        
})