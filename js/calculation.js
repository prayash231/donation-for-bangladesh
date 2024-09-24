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

    // history message
    const historyMsg = document.createElement('div');
    historyMsg.className = 'border border-[#1111111A] rounded-[2.5vw] lg:rounded-[0.833vw] w-[82vw] mt-[5vw] lg:m-[1.667vw] mx-auto lg:mx-0 space-y-5 py-[5vw] px-[5vw] lg:px-[1.667vw] lg:py-[1.667vw]';
    historyMsg.innerHTML = `
        <h3 class="font-bold md:text-xl"> ${noakhaliInputValue} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h3>
        <p>Date : ${new Date().toLocaleString()} (Bangladesh Standard Time)</p>
    `;
    const historySection = document.getElementById('history-section');
    historySection.insertBefore(historyMsg, historySection.firstChild);
    my_modal_5.showModal();
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

    // history message
    const historyMsg = document.createElement('div');
    historyMsg.className = 'border border-[#1111111A] rounded-[2.5vw] lg:rounded-[0.833vw] w-[82vw] mt-[5vw] lg:m-[1.667vw] mx-auto lg:mx-0 space-y-5 py-[5vw] px-[5vw] lg:px-[1.667vw] lg:py-[1.667vw]';
    historyMsg.innerHTML = `
        <h3 class="font-bold md:text-xl"> ${feniInputValue} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
        <p>Date : ${new Date().toLocaleString()} (Bangladesh Standard Time)</p>
    `;
    const historySection = document.getElementById('history-section');
    historySection.insertBefore(historyMsg, historySection.firstChild);
    my_modal_5.showModal();
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

    // history message
    const historyMsg = document.createElement('div');
    historyMsg.className = 'border border-[#1111111A] rounded-[2.5vw] lg:rounded-[0.833vw] w-[82vw] mt-[5vw] lg:m-[1.667vw] mx-auto lg:mx-0 space-y-5 py-[5vw] px-[5vw] lg:px-[1.667vw] lg:py-[1.667vw]';
    historyMsg.innerHTML = `
        <h3 class="font-bold md:text-xl"> ${quotaInputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p>Date : ${new Date().toLocaleString()} (Bangladesh Standard Time)</p>
    `;
    const historySection = document.getElementById('history-section');
    historySection.insertBefore(historyMsg, historySection.firstChild);
    my_modal_5.showModal();
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






