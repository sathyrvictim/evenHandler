const btnOne = document.querySelector('#btnOne');
const btnKeys = document.querySelector('.btnKeys');

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
        if (e.button == mouseKey) keys.push('Mouse key');

        

        switch (e.button) {
            case 0:
                keys.push('Mouse Left');
                break;
            case 1:
                keys.push('Mouse Middle');
                break;
            case 2:
                keys.push('Mouse Right');
                break;
            }

            logTwo.textContent = `U pressed: ${keys.join('+')} key`;
        
    });

