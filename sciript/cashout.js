document.getElementById('cashout-btn').addEventListener('click', function(){
// // get the agent number  & vallited 
const cashoutNumber = getValueFromInput('cashout-number');
if(cashoutNumber.length != 11){
    alert('invalid Number');
    return;

}
// get the amount

const cashoutAmount = getValueFromInput('cashout-amount')
//  console.log(cashoutAmount);
 // get the current balance

const currentBalance = document.getElementById('balance');
const balance = currentBalance.innerText;


// console.log(balance);
// calculate balance 

const newBalance = Number(balance)- Number(cashoutAmount);

if(newBalance < 0 ){
    alert('Invalid Amount')
    return;
}

const pin = getValueFromInput('cashout-pin');
if(pin === '1234'){
    alert('Cashout is successful');
    currentBalance.innerText = newBalance.toFixed(2) ;
}
else{
    alert('invalid Pin');
    return
}
})










// document.getElementById('cashout-btn').addEventListener('click',function(){

// // get the agent number  & vallited 
// const agentNumberInput = document.getElementById('cashout-number');
// const agentNumber = agentNumberInput.value;

// if(agentNumber.length !== 11){
//     alert('invalid Number');
//     return;
// }
// // console.log(agentNumber);



// // get the amount
// let cashoutAmountInput = document.getElementById('cashout-amount');

// let cashoutAmount = cashoutAmountInput.value;

// // console.log(cashoutAmount);


// // get the current balance
// const currentBalance = document.getElementById('balance');
// const balance = currentBalance.innerText;


// // console.log(balance);



// // calculate New Balanace

// const newBalance = Number(balance)- Number(cashoutAmount);
// if(newBalance < 0 ){
//     alert('invalid Amount');
//     return;
// }


// // console.log(newBalance);



// // get the pin and verifiy  
// const pinInput = document.getElementById('cashout-pin');

// const pin = pinInput.value;
// // console.log(pin);


// if(pin === '1234'){
//     alert('cashout Success');
//      currentBalance.innerText = newBalance;
    
// }
// else{
//     alert('pin Invalid');
//     return;
// }


// })