const btnOne = document.querySelector('#btnOne');
const btnKeys = document.querySelector('#btnKeys');

    btnOne.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
    });

    btnKeys.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
    });

    btnOne.addEventListener('mouseup', (e) => {
        let logOne = document.querySelector('#logOne');
        switch (e.button) {
            case 0:
                logOne.textContent = 'Left mouse button clicked.'; 
                break;
            case 1:
                logOne.textContent = 'Middle mouse button clicked.';
                break;
            case 2:
                logOne.textContent = 'Right mouse button clicked.';
                break;
            case 3:
                logOne.textContent = 'Backward mouse button clicked.';
                break;
            case 4:
                logOne.textContent = 'Forward mouse button clicked.';
                break;
            default:
                logOne.textContent = `Unknow key button clicked: ${e.button}`
        };
    });

    btnKeys.addEventListener('click', (e)=>{

    const logTwo = document.querySelector('.logTwo');
    let   keys   = [];
        if (e.shiftKey) keys.push('Shift');
        if (e.ctrlKey) keys.push('Ctrl');
        if (e.altKey) keys.push('Alt');
        if (e.metaKey) keys.push('Window');
        if (e.button === 0 ) keys.push('Left Mouse');

            logTwo.textContent = `U pressed: ${keys.join('+')} key`;
        
    });


    const track = document.querySelector('#track');

    track.addEventListener('mousemove', (e)=>{
        track.innerHTML = `Position Client X/Y: ${e.clientX}, ${e.clientY} <br>
                            Position Screen X/Y: ${e.screenX}, ${e.clientY}`;
    
    });


    const textBox = document.querySelector('#message');

    textBox.setAttribute('style', 'background-color: red;')
    
    textBox.addEventListener('contextmenu', (e)=>{
        e.preventDefault();
    });


    textBox.addEventListener('keyup', (e)=>{
        const textEvent = document.querySelector('.keyEvent');
        textEvent.textContent = `You pressed ${e.key} / ${e.code}`;
    });