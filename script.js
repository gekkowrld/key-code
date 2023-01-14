// window.addEventListener('keydown', keyDown);
// function keyDown(e){
//     let charKey = e.key;
//     let theKeyNum = charKey.charCodeAt();
//     const main = document.querySelector('main');
//     const div = document.createElement('div');
//     const keyName = document.createElement('p');
//     const keyNum = document.createElement('p');
//     main.appendChild(div);
//     div.appendChild(keyName);
//     div.appendChild(keyNum);
//     keyName.setAttribute('class', 'key-name');
//     keyNum.setAttribute('class','key-num');
//     if(charKey === undefined){
//         keyName.innerText = ':('
//         keyNum.innerText = ':(';
//     }else if(charKey === " "){
//         keyName.innerText = 'SpaceBar';
//         keyNum.innerText = theKeyNum;
//     }else{
//         keyName.innerText = charKey;
//         keyNum.innerText = theKeyNum;
//     }
//     let y = main.clientHeight;
//     let x = main.clientWidth;
//     scrollTo(x,y)
// }

// const mode = document.querySelector('.mode')
// mode.addEventListener('click', modeSwitch);
// function modeSwitch(){
//     let darkBody = document.querySelector('body');
//     const darkMd = Array.from(document.querySelectorAll('p'));
//     darkMd.forEach(p => p.classList.toggle('dark'))
//     darkBody.classList.toggle('dark');
//     if(mode.innerText === 'Dark Mode'){
//         mode.innerText = 'Light Mode';
//     }else{
//         mode.innerText = 'Dark Mode'
//     }
// }
const keys = document.querySelectorAll('#keyboard li');
const letter = document.querySelectorAll('letter');
console.log(letter.length);