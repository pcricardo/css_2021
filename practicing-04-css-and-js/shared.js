var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalActionNo = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop);
console.dir(selectPlanButton);
//console.dir(modal.style['background-image']);
//console.dir(modal.style.backgroundImage);

for(var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
         // modal.style.display = 'block';
         // backdrop.style.display = 'block';
         //modal.className = 'block'; // This will actually override the complete class
         modal.classList.add('open');
         backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalActionNo) {
    modalActionNo.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

