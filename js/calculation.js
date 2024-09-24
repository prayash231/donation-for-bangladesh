// noakhali section
getId('donate-noakhali-btn').addEventListener('click', function(){
    const mainBalance = getNumber('main-balance');
    const noakhaliTotalAmount = getNumber('noakhali-total-amount');
    const noakhaliInputValue = getInputValue('noakhali-input-value');
    if(noakhaliInputValue <= 0 || isNaN(noakhaliInputValue)){
        alert("Invalid donation amount");
        return;   
    }
    const noakhaliFinalAmount = (noakhaliTotalAmount + noakhaliInputValue).toFixed(2);
    const reduceBalance = (mainBalance - noakhaliInputValue).toFixed(2);
    if(reduceBalance < 0){
        alert("Invalid donation amount");
        return;
    }
    getId('main-balance').innerText = reduceBalance;
    getId('noakhali-total-amount').innerText = noakhaliFinalAmount;
    getId('noakhali-input-value').value = '';
});

// feni section calculation
getId('donate-feni-btn').addEventListener('click', function(){
    const mainBalance = getNumber('main-balance');
    const feniTotalAmount = getNumber('feni-total-amount');
    const feniInputValue = getInputValue('feni-input-value');
    if(feniInputValue <= 0 || isNaN(feniInputValue)){
        alert("Invalid donation amount");
        return;   
    }
    const feniFinalAmount = (feniTotalAmount + feniInputValue).toFixed(2);
    const reduceBalance = (mainBalance - feniInputValue).toFixed(2);
    if(reduceBalance < 0){
        alert("Invalid donation amount");
        return;
    }
    getId('main-balance').innerText = reduceBalance;
    getId('feni-total-amount').innerText = feniFinalAmount;
    getId('feni-input-value').value = '';
});

// quota section calculation
getId('donate-quota-btn').addEventListener('click', function(){
    const mainBalance = getNumber('main-balance');
    const quotaTotalAmount = getNumber('quota-total-amount');
    const quotaInputValue = getInputValue('quota-input-value');
    if(quotaInputValue <= 0 || isNaN(quotaInputValue)){
        alert("Invalid donation amount");
        return;   
    }
    const quotaFinalAmount = (quotaTotalAmount + quotaInputValue).toFixed(2);
    const reduceBalance = (mainBalance - quotaInputValue).toFixed(2);
    if(reduceBalance < 0){
        alert("Invalid donation amount");
        return;
    }
    getId('main-balance').innerText = reduceBalance;
    getId('quota-total-amount').innerText = quotaFinalAmount;
    getId('quota-input-value').value = '';
});





/* getId('donate-noakhali-btn').addEventListener('click', function(){
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const noakhaliTotalAmount = parseFloat(document.getElementById('noakhali-total-amount').innerText);
    const noakhaliInputValue = parseFloat(document.getElementById('noakhali-input-value').value);

    if(noakhaliInputValue <= 0 || isNaN(noakhaliInputValue)){
        alert("Invalid donation amount");
        return;   
    }
    
    const noakhaliFinalAmount = noakhaliTotalAmount + noakhaliInputValue;
    const reduceBalance = mainBalance - noakhaliInputValue;

    if(reduceBalance < 0){
        alert("Invalid donation amount");
        return;
    }

    document.getElementById('noakhali-total-amount').innerText = noakhaliFinalAmount;
    document.getElementById('main-balance').innerText = reduceBalance;

    document.getElementById('noakhali-input-value').value = '';  
}); */


// document.getElementById('donate-noakhali-btn').addEventListener('click', function(){
//     const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
//     const noakhaliTotalAmount = parseFloat(document.getElementById('noakhali-total-amount').innerText);
//     const noakhaliInputValue = parseFloat(document.getElementById('noakhali-input-value').value);
    
//     const noakhaliFinalAmount = noakhaliTotalAmount + noakhaliInputValue;
//     const reduceBalance = mainBalance - noakhaliInputValue;

//     document.getElementById('noakhali-total-amount').innerText = noakhaliFinalAmount;
//     document.getElementById('main-balance').innerText = reduceBalance;

//     document.getElementById('noakhali-input-value').value = '';
// });






