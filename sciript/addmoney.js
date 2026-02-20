document.getElementById("add-money-btn").addEventListener('click',function(){
//  bank account get 
let bankAccount = getValueFromInput('add-money-bank');
if(bankAccount == "Select bank"){
    alert('Please select a bank ');
    return;
}

// get bank account number
const accno = getValueFromInput('add-money-number');
if(accno.length != 11){
    alert('invalid Account number');
}
// 3 get ammount

const amount = getValueFromInput('add-money-amount');

const currentBalance = getBalance();

const newBalance =currentBalance + Number(amount);

//pin verify

const pin = getValueFromInput('add-money-pin');
if(pin == '1234'){
    alert(`add money Successful from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance.toFixed(2));

     // history container niya asbo
     const history = document.getElementById('history-container');
     
     // new div create korbo
     const newHistory = document.createElement("div");

     // new div innerHtml add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">

    add money Successful from ${bankAccount} at ${new Date()}
  </div>
    `


     // history container e newDiv append korbo
history.append(newHistory);
}
else{
    alert('invalid pin');
    return;
}



})