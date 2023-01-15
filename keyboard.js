const theAlphaNormKeys = Array.from(document.querySelectorAll('.norm-key, .space-bar'));
const inputTextArea = document.querySelector('#input-text-area')
const theShiftKeys = Array.from(document.querySelectorAll('.shift'));
const offShiftKeys = Array.from(document.querySelectorAll('.off'));
const onShiftKeys = Array.from(document.querySelectorAll('.on'));

onShiftKeys.forEach(onShiftKey => onShiftKey.classList.add('hidden-content'));

theShiftKeys.forEach(theShiftKey => theShiftKey.addEventListener('click', () =>{
    onShiftKeys.forEach(onShiftKey => onShiftKey.classList.toggle('hidden-content'));
    offShiftKeys.forEach(offShiftKey => offShiftKey.classList.toggle('hidden-content'));
}));

theAlphaNormKeys.forEach(theAlphaNormKey => theAlphaNormKey.addEventListener('click', () => {
    for(let i = 10; i > 0; i--){
        inputTextArea.innerText = theAlphaNormKey.innerText;
    }
}));
