document.getElementById('transfer-btn').addEventListener('click',function(){
    
    // step 1 account number niya asbo variyfy
 const account = getValueFromInput('transfer-number')


    // step 2 ammount niya asbo 
const amountToTransfer = getValueFromInput('transfer-amount');





    // get the current balance

const balance = getBalance();


    // calculate balance 
const newBalance = balance - amountToTransfer;

if(newBalance < 0){
    alert('Invalid Balance');
    return;
}

    // pin verifiy korbo    

const pin = getValueFromInput('transfer-pin');
if (pin === '1234') {
    alert('money is transfer');

    const totalMoney = setBalance(newBalance.toFixed(2));

    
    // history container niya asbo
     const history = document.getElementById('history-container');
     
     // new div create korbo
     const newHistory = document.createElement("div");

     // new div innerHtml add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">

    CashOut Successful CashOut ${cashoutAmount} from ${cashoutNumber} at ${new Date()}
  </div>
    `


     // history container e newDiv append korbo
history.append(newHistory);

} else {

alert('Invalid Pin')

}


    
})