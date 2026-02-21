// machine id -> input value 
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(value);
    return value;
    
}

function getBalance(){
const balanceElement = document.getElementById('balance'); 
const balance = balanceElement.innerText;

return Number(balance);

}


function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// bujlam nah

// machine id >> hide all >> show id

// function showOnly(id){    
//     const addmoney= document.getElementById('addmoney');
//     const cashout= document.getElementById('Cashout');

//     // console.log(`add Money- ${addmoney}, cashout - ${cashout}`);

//     //shobai k hide kore deow
// addmoney.classList.add('hidden');
// cashout.classList.add('hidden');
//     // id wala element ta ke tmi show kora

//     const seleted = document.getElementById(id);
//     seleted.classList.remove('hidden');
// }
 






function showOnly(id){
const addMoney = document.getElementById('addmoney');
const cashOut = document.getElementById('Cashout');
const transfers= document.getElementById('trasnfer');
const history = document.getElementById('history');

addMoney.classList.add('hidden');
cashOut.classList.add('hidden');
transfers.classList.add('hidden');
history.classList.add('hidden')

const select = document.getElementById(id);
select.classList.remove('hidden');


}

