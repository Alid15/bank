document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: get the deposit amount
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-3: get the current deposit total
    // for non input (element other input,textarea)use innerText to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4 : add number to set the total deposit

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step-5 : get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 : calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total

    balanceTotalElement.innerText = currentBalanceTotal;

    //step-clear: clear the deposit field
    depositField.value='';
})