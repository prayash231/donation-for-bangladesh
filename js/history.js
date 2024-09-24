getId('history-btn').addEventListener('click', function(){
    getId('donation-btn').classList.remove('bg-pastelGreen');
    getId('donation-btn').classList.add('border', 'border-[#1111114D]', 'text-[#111111B3]');
    getId('history-btn').classList.add('bg-pastelGreen');
    getId('history-btn').classList.remove('border', 'border-[#1111114D]', 'text-[#111111B3]');
    getId('main-section').classList.add('hidden');
});


// document.getElementById('history-btn').addEventListener('click', function(){
//     document.getElementById('donation-btn').classList.remove('bg-pastelGreen');
//     document.getElementById('donation-btn').classList.add('border', 'border-[#1111114D]', 
//     'text-[#111111B3]');
//     document.getElementById('history-btn').classList.add('bg-pastelGreen');
//     document.getElementById('history-btn').classList.remove('border', 'border-[#1111114D]', 
//     'text-[#111111B3]');
//     document.getElementById('main-section').classList.add('hidden');
// });

