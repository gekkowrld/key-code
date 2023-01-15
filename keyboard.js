const theAlphaNormKeys = Array.from(document.querySelectorAll('.norm-key, .space-bar'));
const theShiftKeys = Array.from(document.querySelectorAll('.shift'));
const offShiftKeys = Array.from(document.querySelectorAll('.off'));
const onShiftKeys = Array.from(document.querySelectorAll('.on'));

onShiftKeys.forEach(onShiftKey => onShiftKey.classList.add('hidden-content'));

theShiftKeys.forEach(theShiftKey => theShiftKey.addEventListener('click', () =>{
    onShiftKeys.forEach(onShiftKey => onShiftKey.classList.toggle('hidden-content'));
    offShiftKeys.forEach(offShiftKey => offShiftKey.classList.toggle('hidden-content'));
}));


