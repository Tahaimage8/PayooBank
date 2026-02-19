document.getElementById('login-btn').addEventListener('click',function(){

//get the mobile number input
const numberInput = document.getElementById('input-number');

const contactNumber = numberInput.value ;
console.log(contactNumber);
 // get the pin

 const inputPin = document.getElementById('input-pin');
 const pin = inputPin.value;
 console.log(pin);
 
// match pin & mobile
if (contactNumber =='01234567890' && pin=="1234") {
    // if true >> alert > HomePage
    
    alert('login Success');
    window.location.assign('./home.html')
}
else{

    // if false >> alert > return

    alert("login Failed");
    return;

}
});



