getId('donation-btn').addEventListener('click', function(){
    getId('history-btn').classList.remove('bg-pastelGreen');
    getId('history-btn').classList.add('border', 'border-[#1111114D]', 'text-[#111111B3]');
    getId('donation-btn').classList.add('bg-pastelGreen');
    getId('donation-btn').classList.remove('border', 'border-[#1111114D]', 'text-[#111111B3]');
    getId('main-section').classList.remove('hidden');
});


// document.getElementById('donation-btn').addEventListener('click', function(){
//     document.getElementById('history-btn').classList.remove('bg-pastelGreen');
//     document.getElementById('history-btn').classList.add('border', 'border-[#1111114D]', 
//     'text-[#111111B3]');
//     document.getElementById('donation-btn').classList.add('bg-pastelGreen');
//     document.getElementById('donation-btn').classList.remove('border', 'border-[#1111114D]', 
//     'text-[#111111B3]');
//     document.getElementById('main-section').classList.remove('hidden');
// });