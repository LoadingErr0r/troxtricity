let ampedMode = localStorage.getItem('ampedMode');
const checkbox = document.getElementById('checkbox');
const main = document.getElementById('main');
const toggle = document.getElementById('toxt-form');
const logo = document.getElementById('logo');

document.getElementById('main-photo').setAttribute('draggable', false);

const enableAmped = () => {
    document.body.classList.add('amped');
    main.classList.add('amped');
    toggle.classList.add('amped');
    logo.classList.add('amped');

    localStorage.setItem('ampedMode', 'enabled');
};

const disableAmped = () => {
    document.body.classList.remove('amped');
    main.classList.remove('amped');
    toggle.classList.remove('amped');
    logo.classList.remove('amped');

    localStorage.setItem('ampedMode', null);
};

if(ampedMode === 'enabled') {
    enableAmped();
    document.getElementById('checkbox').checked = true;
    logo.src='/img/amped.png';
    toggle.innerText = 'Amped';
    main.innerHTML = `
        <img id="main-photo" class="main-photo" src="/img/Fullsize_amped.png">
        `
}

checkbox.addEventListener('change', () => {
    event.preventDefault();
    ampedMode = localStorage.getItem('ampedMode');

    if(ampedMode !== 'enabled'){
    enableAmped();
    } else {
    disableAmped();
    };
    if(logo.classList.contains('amped')) {
        logo.src='/img/amped.png'
    } else {
        logo.src='/img/troxtlogo.png'
    };
 
    if(toggle.classList.contains('amped')){
        toggle.innerText = 'Amped'
    } else {
        toggle.innerHTML = 'Lowkey'
    };

    if(main.classList.contains('amped')){
        main.innerHTML = `
        <img id="main-photo" class="main-photo" src="/img/Fullsize_amped.png">
        `
    } else {
        main.innerHTML = `
        <img id="main-photo" class="main-photo" src="/img/Fullsize_lowkey.png">
        `
    };

});
