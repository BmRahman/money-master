document.getElementById('calc-btn').addEventListener('click', function() {
    const incomeField = document.getElementById('income-field');
    const incomeString = incomeField.value;
    const income = parseInt(incomeString);

    const foodField = document.getElementById('food-field');
    const foodFieldString = foodField.value;
    const foodExpense = parseInt(foodFieldString);

    const rentField = document.getElementById('rent-field');
    const rentFieldString = rentField.value;
    const rentExpense = parseInt(rentFieldString);

    const clothField = document.getElementById('cloth-field');
    const clothFieldString = clothField.value;
    const clothExpense = parseInt(clothFieldString);

    const totalExpense = foodExpense + rentExpense + clothExpense;

    const expenseCount = document.getElementById('expense-balance');
    const expenseCountString = expenseCount.innerText;
    const expenseBalanceTotal = parseInt(expenseCountString);
    expenseCount.innerText = totalExpense;

    const finalBalance = document.getElementById('balance-left');
    const finalBalanceString = finalBalance.innerText;
    const balanceLeft = parseInt(finalBalanceString);

    const totalBalanceLeft = income - totalExpense;
    finalBalance.innerText = totalBalanceLeft;
})

document.getElementById('save-btn').addEventListener('click', function() {
    const savefield = document.getElementById('save-field');
    const saveFieldstring = savefield.value;
    const saving = parseInt(saveFieldstring);
    
    const incomeField = document.getElementById('income-field');
    const incomeString = incomeField.value;
    const income = parseInt(incomeString);

    const totalSaving = (saving/100) * income;

    const savingAmount = document.getElementById('saving-amount');
    const savingString = savingAmount.innerText;
    const finalSaving = parseInt(savingString);

    savingAmount.innerText = totalSaving;

    const remaining = document.getElementById('final-balance');
    const remainingString = remaining.innerText;
    const remainingBalance = parseInt(remainingString);

    const finalBalance = document.getElementById('balance-left');
    const finalBalanceString = finalBalance.innerText;
    const balanceLeft = parseInt(finalBalanceString);

    const remainingTotal =  balanceLeft - totalSaving;
    remaining.innerText = remainingTotal;
})