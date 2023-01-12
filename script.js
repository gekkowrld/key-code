function keyPress(e){
    const main = document.querySelector('main')
    const keyNum =document.createElement('p');
    const keyName = document.createElement('p');
    const keyBox = document.createElement('div');
    keyNum.setAttribute('class','key-num')
    keyName.setAttribute('class','key-name');
    main.appendChild(keyBox);
    keyBox.appendChild(keyName);
    keyBox.appendChild(keyNum)
    keyNum.innerText = e.which || e.keyCode;
    if(e.key === undefined || e.keyCode === undefined){
        keyName.innerText = ':(';
        keyNum.innerText = ':('
    }else if(e.key === ' ') keyName.innerText = 'SpaceBar';
    else keyName.innerHTML = e.key;
    const winHeight = main.clientHeight;
    const winWidth = main.clientWidth;
    scrollTo(winWidth, winHeight);
    console.log(e.key);
}
window.addEventListener('keyup', keyPress);
