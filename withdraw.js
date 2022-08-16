/*
1.add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
  2.5-> also make sure to convert the input into a number by using parseFloat
3.Get previous withdraw total

4. calculate total withdraw amount
   4.5-> set total withdraw amount
5.get the previous balance total

6.calculate new balance total
  6.5->set new balance total
*/

// step-1 :

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

     // step-clear:

     withdrawField.value = '';

     if(isNaN(newWithdrawAmount)){
        alert("Provide a valid number");
        return;
     }

    // step-3:

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4:

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-5:

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
   
})